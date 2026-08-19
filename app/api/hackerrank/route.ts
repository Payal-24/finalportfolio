const HACKERRANK_USERNAME = 'payaljindal537';

export async function GET() {
  try {
    const response = await fetch(`https://www.hackerrank.com/rest/hackers/${HACKERRANK_USERNAME}/badges`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`HackerRank request failed with status: ${response.status}`);
    }

    const data = await response.json();
    const models = data.models || [];
    const badgesCount = models.length;
    const solvedCount = models.reduce((acc: number, curr: any) => acc + (curr.solved || 0), 0);

    return Response.json({
      username: `@${HACKERRANK_USERNAME}`,
      profileUrl: `https://www.hackerrank.com/profile/${HACKERRANK_USERNAME}`,
      badges: badgesCount,
      solved: solvedCount,
    });
  } catch (error) {
    console.error('Error fetching HackerRank stats:', error);
    // Keep fallback metrics
    return Response.json({
      username: `@${HACKERRANK_USERNAME}`,
      profileUrl: `https://www.hackerrank.com/profile/${HACKERRANK_USERNAME}`,
      badges: 2,
      solved: 15,
    });
  }
}
