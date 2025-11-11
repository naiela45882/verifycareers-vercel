module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'No text provided' });
    }
    
    // Basic analysis
    const analysis = {
      riskScore: 0,
      redFlags: [],
      message: 'Basic analysis complete'
    };
    
    if (text.includes('send money')) {
      analysis.redFlags.push('Asks for money transfer');
      analysis.riskScore += 3;
    }
    
    res.json(analysis);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};