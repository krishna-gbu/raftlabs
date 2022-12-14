const Book = require('../models/bookModel')
const catchAsync = require('../utils/catchAsync')




exports.addBook = catchAsync(async(req,res,next)=>{
      //   console.log(req.body);
        const book = await Book.create(req.body)
        res.status(200).json(book)
})
  
exports.getAllBook = catchAsync(async(req,res,next)=>{
    const book = await Book.find({}).sort({'title':1}).select("-__v")
    res.status(200).json(book)
})  

exports.getBookByIsbn = catchAsync(async(req,res,next)=>{
      // console.log(req.params.isbn);
      const book = await Book.find({'isbn':req.params.isbn}).select("-__v")
      res.status(200).json(book)
})  

exports.getBookByEmail = catchAsync(async(req,res,next)=>{
      // console.log(req.params.email);
      const book = await Book.find({'authors':{$in:[req.params.email]}}).select("-__v")
      res.status(200).json(book)
})  

exports.getsortmagabook = catchAsync(async(req,res,next)=>{
      let sortTitles = await Book.aggregate([
        {
             "$unwind":"$authors"
        },
        {
           $lookup:{
            from: 'Magazine',
            let:{"authorsb":"$authors"},
            "pipeline":[
              {"$unwind":"$authors"},
              {"$match":{"$expr":{"$eq":["$author","$$authorsb"]}}},
            ],
            
            as: 'new_title'
          }},
          {
            $sort:{"title":1}
          }
         
        ])
      res.status(200).json(sortTitles)
})  


