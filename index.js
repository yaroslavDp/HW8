const express = require('express');
const booksRouter = require('./routes/booksRoutes');
const app = express();
const {errorLogger, errorResponder, invalidPathHandler} = require('./middlewares/errorMiddleware');
app.use(express.json());


app.use('/api/books', booksRouter);

app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})