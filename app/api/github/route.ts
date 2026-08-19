const GITHUB_USERNAME = 'Payal-24';

type GithubUser = {
  html_url: string;
  login: string;
  public_repos: number;
};

type GithubRepo = {
  name: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
};

const githubHeaders = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'Payal-Portfolio',
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

async function fetchJson<T>(url: string) {
  const response = await fetch(url, {
    headers: githubHeaders,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function getContributionCount(username: string) {
  const response = await fetch(`https://github.com/users/${username}/contributions`, {
    headers: { 'User-Agent': 'Payal-Portfolio' },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return { count: 0, label: 'Contributions' };
  }

  const html = await response.text();
  const counts = [...html.matchAll(/data-count="(\d+)"/g)].map((match) =>
    Number(match[1])
  );

  return {
    count: counts.reduce((total, count) => total + count, 0),
    label: 'Contributions',
  };
}

export async function GET() {
  try {
    const [user, repos, contributions] = await Promise.all([
      fetchJson<GithubUser>(`https://api.github.com/users/${GITHUB_USERNAME}`),
      fetchJson<GithubRepo[]>(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
      ),
      getContributionCount(GITHUB_USERNAME),
    ]);

    const topRepositories = repos
      .filter((repo) => !repo.fork)
      .sort((first, second) => {
        if (second.stargazers_count !== first.stargazers_count) {
          return second.stargazers_count - first.stargazers_count;
        }

        return (
          new Date(second.updated_at).getTime() - new Date(first.updated_at).getTime()
        );
      })
      .slice(0, 3)
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
      }));

    return Response.json({
      username: `@${user.login}`,
      profileUrl: user.html_url,
      repositories: user.public_repos,
      contributions: contributions.count,
      contributionLabel: contributions.label,
      topRepositories,
    });
  } catch {
    return Response.json(
      {
        username: `@${GITHUB_USERNAME}`,
        profileUrl: `https://github.com/${GITHUB_USERNAME}`,
        repositories: 0,
        contributions: 0,
        contributionLabel: 'Contributions',
        topRepositories: [],
      },
      { status: 502 }
    );
  }
}
