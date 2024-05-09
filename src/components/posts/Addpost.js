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

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      title: title,
      description: description
    };
  
    try {
      const response = await fetch('https://localhost:3000/api/post/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        console.log('Post created successfully!');
        // Optionally, you can reset the form fields after successful submission
        setTitle('');
        setImage('');
        setDescription('');
        setSelectedCategory(categories[0]);
      } else {
        console.error('Failed to create post.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="add-post-container">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" value={image} onChange={handleImageChange} />

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
