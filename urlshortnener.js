🛠 1. Set up the project
bash
Copy
Edit
mkdir url-shortener
cd url-shortener
npm init -y
🧱 2. Install dependencies
bash
Copy
Edit
npm install express mongoose shortid body-parser
mongoose: For MongoDB

shortid: For generating unique short codes

body-parser: For parsing JSON requests

📁 3. Project structure
pgsql
Copy
Edit
url-shortener/
├── models/
│   └── Url.js
├── server.js
📄 4. Create Mongoose model
models/Url.js

javascript
Copy
Edit
const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Url', UrlSchema);
🚀 5. Build the Express server
server.js

javascript
Copy
Edit
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const Url = require('./models/Url');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/url-shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// POST: Shorten a URL
app.post('/api/shorten', async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  let url = await Url.findOne({ longUrl });
  if (url) {
    return res.json({ shortUrl: `http://localhost:3000/${url.shortCode}` });
  }

  const shortCode = shortid.generate();
  const newUrl = new Url({ longUrl, shortCode });
  await newUrl.save();

  res.status(201).json({ shortUrl: `http://localhost:3000/${shortCode}` });
});

// GET: Redirect to original URL
app.get('/:code', async (req, res) => {
  const url = await Url.findOne({ shortCode: req.params.code });
  if (url) {
    return res.redirect(url.longUrl);
  } else {
    return res.status(404).json({ error: 'URL not found' });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
🧪 6. Test with Postman
POST /api/shorten
Body (JSON):

json
Copy
Edit
{
  "longUrl": "https://example.com"
}
Response:

json
Copy
Edit
{
  "shortUrl": "http://localhost:3000/abc123"
}
GET /:code
Open the returned shortUrl in browser or Postman → it redirects to the original long URL.

