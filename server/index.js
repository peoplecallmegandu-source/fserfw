/* Simple Express static server for Aurora Coffee */
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

// Basic health check
app.get('/health', (req, res) => res.json({status: 'ok', uptime: process.uptime()}));

// Fallback to index for client-side routing if needed
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Aurora Coffee server listening on port ${PORT}`));
