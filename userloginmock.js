1. Set up the project:
First, initialize a new Node.js project.

bash
Copy
Edit
mkdir user-login-system
cd user-login-system
npm init -y
2. Install Express:
You will need Express to handle the server and routes.

bash
Copy
Edit
npm install express
3. Create the Express server and login route:
Create a file named server.js in the root of the project.

server.js
javascript
Copy
Edit
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Hardcoded credentials (username: user, password: password123)
const credentials = {
  username: 'user',
  password: 'password123',
};

// POST endpoint for login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match the hardcoded credentials
  if (username === credentials.username && password === credentials.password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
4. Testing the API using Postman:
Now you can test the login system using Postman.

POST Request (to log in):
URL: http://localhost:3000/api/login

Method: POST

Body (JSON):

json
Copy
Edit
{
  "username": "user",
  "password": "password123"
}
Expected Response for Correct Credentials:
json
Copy
Edit
{
  "message": "Login successful"
}
POST Request with Invalid Credentials:
Body (JSON):

json
Copy
Edit
{
  "username": "user",
  "password": "wrongpassword"
}
Expected Response for Incorrect Credentials:
json
Copy
Edit
{
  "message": "Invalid username or password"
}
5. Run the server:
Run the server with the following command:

bash
Copy
Edit
node server.js