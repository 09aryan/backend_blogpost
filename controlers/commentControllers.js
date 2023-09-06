//import models
const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

//business logic

exports.createComment=async( req,res )=>{
    try{
        const{post,user,body}=req.body;
        const comment=new Comment({
            post,user,body
        });
        const saveComment=await comment.save();

        //find the post by id and save comment in post comment array
          const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}},{new:true}).populate("comments");  //populate the comment array with comment doucments

          //return
          res.json({
            post:updatedPost,
          });

    } catch(error){
        return res.status(500).json({
            error:"error while creating comment",
        })
    }
}  