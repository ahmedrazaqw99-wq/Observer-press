export default async function handler(req, res) {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&max=8&apikey=${apiKey}`
    );
    const data = await response.json();

    if (!data.articles) {
      return res.status(500).json({ error: data.errors?.[0] || 'Failed to fetch news' });
    }

    const articles = data.articles.map((a, index) => ({
      id: `live-${index}`,
      title: a.title,
      description: a.description,
      url: a.url,
      source: a.source?.name || 'Unknown',
      image: a.image,
      publishedAt: a.publishedAt,
    }));

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate');
    return res.status(200).json({ articles });
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong fetching news' });
  }
}
