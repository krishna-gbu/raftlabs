const Author = require('../models/authorModel')

const catchAsync = require('../utils/catchAsync')




exports.addAuthor = catchAsync(async(req,res,next)=>{
    //   const data = req.body
    //   console.log(data);
      const author = await Author.create(req.body)
      res.status(200).json(author)
})

exports.getAllAuthor = catchAsync(async(req,res,next)=>{
    const author = await Author.find({}).select("-__v")
    res.status(200).json(author)
})  