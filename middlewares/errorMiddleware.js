const errorLogger = (error, req, res, next) => {
    console.log( `error ${error.message}`) 
    next(error)
  }
  
const errorResponder = (error, req, res, next) => {
    res.header("Content-Type", 'application/json')
    const status = error.statusCode || 400
    res.status(status).send(error.message)
  }
  
  
const invalidPathHandler = (req, res, next) => {
    res.status(404).json({message: 'Invalid path!'})
  }

module.exports = {errorLogger, errorResponder, invalidPathHandler};