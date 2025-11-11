module.exports = (req, res) => {
  res.json({ 
    message: '🎉 VerifyCareers Backend is WORKING on Vercel!',
    status: 'SUCCESS',
    timestamp: new Date().toISOString()
  });
};