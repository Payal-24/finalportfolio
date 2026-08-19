const GFG_USERNAME = 'payaljin10d9';

export async function GET() {
  try {
    const response = await fetch(`https://gfgstatscard.vercel.app/${GFG_USERNAME}?raw=true`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GeeksForGeeks request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return Response.json({
      username: `@${GFG_USERNAME}`,
      profileUrl: `https://www.geeksforgeeks.org/profile/${GFG_USERNAME}?tab=activity`,
      solved: data.total_problems_solved || 0,
      score: data.total_score || 0,
    });
  } catch (error) {
    console.error('Error fetching GeeksForGeeks stats:', error);
    // Keep fallback metrics
    return Response.json({
      username: `@${GFG_USERNAME}`,
      profileUrl: `https://www.geeksforgeeks.org/profile/${GFG_USERNAME}?tab=activity`,
      solved: 237,
      score: 530,
    });
  }
}
