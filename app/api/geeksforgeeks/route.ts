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
    
    // Calculate total solved from breakdown if total_problems_solved is 0 or missing
    const solved = data.total_problems_solved || 
      ((data.School || 0) + (data.Basic || 0) + (data.Easy || 0) + (data.Medium || 0) + (data.Hard || 0));

    // Calculate score from breakdown if total_score is 0 or missing
    const score = data.total_score || 
      ((data.School || 0) * 1 + (data.Basic || 0) * 1 + (data.Easy || 0) * 2 + (data.Medium || 0) * 4 + (data.Hard || 0) * 8);

    // If both solved and score are 0, use fallback values
    if (solved === 0 && score === 0) {
      return Response.json({
        username: `@${GFG_USERNAME}`,
        profileUrl: `https://www.geeksforgeeks.org/profile/${GFG_USERNAME}?tab=activity`,
        solved: 256,
        score: 535,
      });
    }

    return Response.json({
      username: `@${GFG_USERNAME}`,
      profileUrl: `https://www.geeksforgeeks.org/profile/${GFG_USERNAME}?tab=activity`,
      solved,
      score,
    });
  } catch (error) {
    console.error('Error fetching GeeksForGeeks stats:', error);
    // Keep fallback metrics
    return Response.json({
      username: `@${GFG_USERNAME}`,
      profileUrl: `https://www.geeksforgeeks.org/profile/${GFG_USERNAME}?tab=activity`,
      solved: 256,
      score: 535,
    });
  }
}
