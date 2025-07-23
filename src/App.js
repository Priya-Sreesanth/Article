import React, { useState } from 'react';
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleArticleCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Article Creator</h1>
      <ArticleForm onArticleCreated={handleArticleCreated} />
      <h2>Articles</h2>
      <ArticleList refresh={refresh} />
    </div>
  );
}

export default App;
