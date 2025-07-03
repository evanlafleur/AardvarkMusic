// server/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Aardvark Music backend running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});