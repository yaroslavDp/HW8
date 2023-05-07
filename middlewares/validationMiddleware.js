const books = require("../assets/booksData");

const validateBook = (req, res, next) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find((book) => book.id === bookId);

    if(!book){
        let error = new Error("Book not found");
        error.statusCode = 404;
        throw error;
    }
    req.book = book;
    next();
}

const validateReview = (req, res, next) => {
    const reviewId = parseInt(req.params.reviewId);
    const review = req.book.reviews.find((review) => review.id === reviewId);
    if (!review) {
        let error = new Error("Review not found");
        error.statusCode = 404;
        throw error;
    }
    req.review = review;
    next();
}

const validateCreate = (req, res, next) => {
    const { comment, title } = req.body;
    let error;
    if (!comment || !title) {
        error = new Error("Invalid request body! Required: title and comment!");
        throw error;
    } 
    const book = books.find((book) => book.title === title);
    if(book){
        error = new Error("Invalid request! Book already exists!");
        throw error;
    }
    next();
}

const validateBody = (req, res, next) => {
    const { title, comment } = req.body;
    let error;
    if(!comment) {
        if(!title){
            error = new Error("Invalid request body! Required body info!");
            error.statusCode = 400;
            throw error;
        } 
    }
    next();
}

module.exports = {validateBook, validateReview, validateCreate, validateBody};