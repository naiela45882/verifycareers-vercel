// SIMPLIFIED VERSION - replace your analyze-job.js with this
module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'No text provided' });
    }
    
    // Simple analysis
    const analysis = {
      riskScore: text.includes('send money') ? 3 : 0,
      redFlags: text.includes('send money') ? ['Money request detected'] : [],
      message: 'Analysis complete',
      analyzedAt: new Date().toISOString(),
      success: true
    };
    
    res.json(analysis);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
