const express = require('express');
const books = require('../assets/booksData');
const {validateBook, validateReview, validateCreate, validateBody} = require('../middlewares/validationMiddleware');
const booksRouter = express.Router();


booksRouter.get('/', (req,res) => {
    res.status(200).json(books);
});

booksRouter.get('/:bookId', validateBook, (req,res) => {
    res.status(200).json(req.book);
});

booksRouter.post('/create', validateCreate, (req, res) => {
  const { title, comment } = req.body;
  const book = {
        id: books.length + 1,
        title,
        reviews: [
        {
            id: 1,
            comment
        }
        ]
    };
  books.push(book);
  res.status(201).json(book);
});

booksRouter.put('/:bookId', validateBook, validateBody, (req,res) => {
    let updated = {
        id: req.book.id,
        title: req.body.title,
        reviews: [...req.book.reviews]
    };
    let targetIndex = books.indexOf(req.book);
    books.splice(targetIndex, 1, updated);
    res.status(204);
});

booksRouter.post('/:bookId/reviews', validateBook, validateBody, (req, res) => {
    const { comment } = req.body;
    const review = {
      id: req.book.reviews.length + 1,
      comment
    };
    req.book.reviews.push(review);
    res.status(201).json(review);
});

booksRouter.delete('/:bookId/reviews/:reviewId', validateBook, validateReview, (req, res) => {
    const reviewIndex = req.book.reviews.findIndex((review) => review.id === req.review.id);
    req.book.reviews.splice(reviewIndex, 1);
    res.status(200).json(req.book);
});

booksRouter.get('/:bookId/reviews', validateBook, (req, res) => {
    res.status(200).json(req.book.reviews);
});

module.exports = booksRouter