const Post=require("../models/postModel");
exports.createPost=async (req,res)=>{
    try{
        const {title,body}=req.body;
        const post=new Post({
            title,body,
        })
        const svaedPost=await post.save();
        res.json({
            post:svaedPost,
        })
    }catch(err){
        return res.status(400).json({
            err:"ERROR WHILE CRATIGN POST"
        })
    }
}
exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate("comments").populate("likes").exec();
        // .populate("likes"): After finding the posts, this part of the code tells Mongoose to populate the "likes" field in each post document. Populating means that, instead of just getting the IDs of the liked items, it fetches the actual data associated with those IDs. So, if a post has likes, this code will fetch the details of those likes.  
        res.json ({
            posts,
        }) 
    }
    catch(err){
        return res.status(400).json({
            err:"Error while fetching all the posts"
        })
    }
}