import React, { useState } from 'react';

// Sample image data
const images = [
  { id: 1, src: 'https://via.placeholder.com/300x200?text=Nature+1', category: 'nature' },
  { id: 2, src: 'https://via.placeholder.com/300x200?text=Nature+2', category: 'nature' },
  { id: 3, src: 'https://via.placeholder.com/300x200?text=Architecture+1', category: 'architecture' },
  { id: 4, src: 'https://via.placeholder.com/300x200?text=Architecture+2', category: 'architecture' },
  { id: 5, src: 'https://via.placeholder.com/300x200?text=Animals+1', category: 'animals' },
  { id: 6, src: 'https://via.placeholder.com/300x200?text=Animals+2', category: 'animals' },
];

// Filter buttons
const categories = ['all', 'nature', 'architecture', 'animals'];

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="gallery-container">
      <h1>Photo Gallery</h1>

      {/* Category filter buttons */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="image-grid">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.src} alt={image.category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
/** Styling:
Here’s some basic CSS for styling the gallery layout:

css
Copy
Edit
.gallery-container {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.filter-buttons {
  margin-bottom: 20px;
}

.filter-buttons button {
  padding: 10px 15px;
  margin: 0 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.filter-buttons button:hover {
  background-color: #0056b3;
}

.filter-buttons .active {
  background-color: #28a745;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.image-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
Steps to Run the App:
Install React App:
If you don’t already have a React app, create one using:

bash
Copy
Edit
npx create-react-app photo-gallery
cd photo-gallery
Add the Code:
Replace the contents of src/App.js with the code above.

Styling:
Add the CSS code in src/App.css for styling the gallery and buttons.

Start the App:
Run the app using:

bash
Copy
Edit
npm start **/