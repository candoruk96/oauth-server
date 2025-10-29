const express = require('express');
const { URLSearchParams } = require('url');

const app = express();

app.get('/auth', (req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_OAUTH_CLIENT_ID || "Ov23liC9jwIFXPXz3jcH",
    redirect_uri: `https://${req.get('host')}/callback`,
    scope: 'repo,user',
    state: req.query.state || 'random'
  });
  
  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});

app.get('/callback', (req, res) => {
  res.redirect(`https://maliq.github.io/admin/#token=${req.query.code}`);
});

// Vercel için export
module.exports = app;