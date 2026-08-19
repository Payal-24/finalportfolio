const LEETCODE_USERNAME = 'Payal2007';
export async function GET() {
  try {
    const query = `
      query leetcodeStats($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
        userContestRanking(username: $username) {
          attendedContestsCount
          rating
          globalRanking
        }
      }
    `;
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error(`LeetCode request failed with status: ${response.status}`);
    }
    const result = await response.json();
    const data = result.data;

    const matchedUser = data?.matchedUser;
    const userContestRanking = data?.userContestRanking;

    // Find "All" difficulty count for problems solved
    const allStats = matchedUser?.submitStats?.acSubmissionNum?.find(
      (item: any) => item.difficulty === 'All'
    );
    const solvedCount = allStats ? allStats.count : 0;
    const contestCount = userContestRanking ? userContestRanking.attendedContestsCount : 0;
    const rating = userContestRanking ? Math.round(userContestRanking.rating) : 0;

    return Response.json({
      username: `@${LEETCODE_USERNAME}`,
      profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
      solved: solvedCount,
      contests: contestCount,
      rating: rating,
    });
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    return Response.json({
      username: `@${LEETCODE_USERNAME}`,
      profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
      solved: 0,
      contests: 0,
      rating: 0,
    });
  }
}