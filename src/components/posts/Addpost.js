import React, { useState } from 'react';
import './addpost.css';

const categories = ['Life', 'Music', 'Style', 'Sport', 'Tech', 'Cinema', 'Romance'];

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic here
    console.log('Title:', title);
    console.log('Image:', image);
    console.log('Description:', description);
    console.log('Category:', selectedCategory);
  };

  return (
    <div className="add-post-container">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" value={image} onChange={handleImageChange} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} required />
        
        <label htmlFor="category">Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
