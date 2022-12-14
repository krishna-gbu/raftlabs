class AppError extends Error {
    
    constructor(message,statusCode){
      super(message)


      this.statusCode =statusCode;
      this.message=this.message
      this.isOperational = true;
    

      Error.captureStackTrace(this,this.constructor)
    }
}

module.exports = AppError