🛠 1. Set up your project
bash
Copy
Edit
mkdir contact-form-api
cd contact-form-api
npm init -y
📦 2. Install dependencies
bash
Copy
Edit
npm install express mongoose body-parser
📁 3. Project structure
css
Copy
Edit
contact-form-api/
├── models/
│   └── Contact.js
├── server.js
📄 4. Mongoose model
models/Contact.js

javascript
Copy
Edit
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema);
🚀 5. Express server
server.js

javascript
Copy
Edit
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Contact = require('./models/Contact');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contact-form', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// POST: Handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
🧪 6. Test in Postman
Endpoint: POST /api/contact
Body (JSON):

json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like to learn more about your services."
}
Success Response:

json
Copy
Edit
{
  "message": "Contact form submitted successfully"
}
