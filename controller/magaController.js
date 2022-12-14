const Maga = require('../models/magazineModel')
const catchAsync = require('../utils/catchAsync')




exports.addMaga = catchAsync(async(req,res,next)=>{
      //   const data = req.body
      //   console.log(data);
        const maga = await Maga.create(req.body)
        res.status(200).json(maga)
})
  
exports.getAllMaga = catchAsync(async(req,res,next)=>{
        const maga = await Maga.find({}).sort({'title':1}).select("-__v")
        res.status(200).json(maga)
})  

exports.getMagaByIsbn = catchAsync(async(req,res,next)=>{
        console.log(req.params.isbn);
        const maga = await Maga.find({'isbn':req.params.isbn}).select("-__v")
        res.status(200).json(maga)
}) 

exports.getMagaByEmail = catchAsync(async(req,res,next)=>{
        // console.log(req.params.email);
        const maga = await Maga.find({'authors':{$in:[req.params.email]}}).select("-__v")
        res.status(200).json(maga)
}) 
