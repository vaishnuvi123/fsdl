1. Set up the project:
First, initialize a new Node.js project.

bash
Copy
Edit
mkdir bookstore-api
cd bookstore-api
npm init -y
2. Install required dependencies:
You will need Express to create the REST API and body-parser to parse incoming request bodies.

bash
Copy
Edit
npm install express body-parser
3. Create the Express server and API routes:
Create a file called server.js in the root of the project.

javascript
Copy
Edit
// server.js
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory array to store books (You can replace this with a database)
let books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

// GET endpoint to retrieve the list of books
app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

// POST endpoint to add a new book
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and Author are required!' });
  }

  // Create a new book object
  const newBook = {
    id: books.length + 1,  // Assign a new id
    title,
    author
  };

  books.push(newBook);

  // Respond with the newly added book
  res.status(201).json(newBook);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
4. Testing the API using Postman:
Now that you have the API set up, you can test it using Postman.

GET Request (to fetch all books):

URL: http://localhost:3000/api/books

Method: GET

Expected response:

json
Copy
Edit
[
  { "id": 1, "title": "To Kill a Mockingbird", "author": "Harper Lee" },
  { "id": 2, "title": "1984", "author": "George Orwell" },
  { "id": 3, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" }
]
POST Request (to add a new book):

URL: http://localhost:3000/api/books

Method: POST

Body (JSON):

json
Copy
Edit
{
  "title": "Moby Dick",
  "author": "Herman Melville"
}
Expected response (after adding the book):

json
Copy
Edit
{ "id": 4, "title": "Moby Dick", "author": "Herman Melville" }
5. Run the server:
Run the server with the following command:

bash
Copy
Edit
node server.js