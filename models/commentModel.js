const mongoose=require("mongoose");
//kis user ne comment kiya hai,kis post pe comment kiya hai,kya comment kiya hai,
//kis post ->refer id
 const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, //refetring id of that post
        ref:"Post", //reference to the post model
    },
    user:{
        type:String, //user id is stored as string,
        required:true,
    },
    body:{ //comment 
        type:String, 
        required:true, 
    }
 }) 
 module.exports=mongoose.model("Comment",commentSchema);