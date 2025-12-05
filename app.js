const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my Cloud Computing Coursework API' });
});

app.post('/test', (req, res) => {
  res.json({ received: req.body });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});