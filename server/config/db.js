const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://rutujabhagate22:1CPza5TXDfq2uNjQ@cluster0.3oyzate.mongodb.net/").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})
//1CPza5TXDfq2uNjQ  mongodb://localhost:27017/BlogApp