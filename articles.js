const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// GET all
router.get('/', async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

// GET one
router.get('/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
});

// POST
router.post('/', async (req, res) => {
  const newArticle = new Article(req.body);
  await newArticle.save();
  res.json(newArticle);
});

// PUT
router.put('/:id', async (req, res) => {
  const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;

