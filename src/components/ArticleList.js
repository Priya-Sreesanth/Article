import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleList = ({ refresh }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/articles');
      setArticles(res.data);
    };
    fetchData();
  }, [refresh]);

  return (
    <ul>
      {articles.map((article) => (
        <li key={article._id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          <small>By {article.author} on {new Date(article.date).toLocaleDateString()}</small>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
