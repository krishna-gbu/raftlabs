const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/bookRouter');
const magaRouter = require('./routes/magaRoute');
const authorRouter = require('./routes/authorRouter');
const AppError = require('./utils/appError');
const app = express();


mongoose.set('strictQuery',false);

mongoose.connect(
    'mongodb://localhost:27017/raftlabs',
   
    (err)=>{
       err ? err.message : console.log('mongdb connection ok');
    }
    )


app.get('/', (req, res) => {
    res.status(200).json({message:'ok'})
})

app.use(express.json())

app.use('/api/v1/author',authorRouter)
app.use('/api/v1/book',bookRouter)
app.use('/api/v1/maga',magaRouter)


app.all('*', (req, res,next) => {
    next(new AppError(`no url found ${req.url}`,404))
})


const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
