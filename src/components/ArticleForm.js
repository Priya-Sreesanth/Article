import React, { useState } from 'react';
import axios from 'axios';

const ArticleForm = ({ onArticleCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/articles', formData);
    setFormData({ title: '', content: '', author: '' });
    onArticleCreated(); // Refresh list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      <button type="submit">Create Article</button>
    </form>
  );
};

export default ArticleForm;
