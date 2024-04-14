const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;
const JSON_FILE_DIR = process.env.JSON_FILE_DIR

app.use(cors());

app.get('/api/data', (req, res) => {
  fs.readFile(JSON_FILE_DIR, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error when trying read json data' });
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
