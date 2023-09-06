const Post=require("../models/postModel");
const Like=require("../models/likeModel");

exports.likePost=async(req,res)=>{
    try{
        const {post,user}=req.body
        const  like=new Like({
            post,user
        });
        const savedLike=await like.save();
        const updatePost=await Post.findByIdAndUpdate(post,{$push:{
            likes:savedLike._id}},{new:true});
            res.json({
                post:updatePost,
            });
        } 
        catch(err){
        return res.status(400).json({
            error:"Error while liking the post", 
        })
        } 
    
} 
// const Post = require("../models/postModel");
// const Like = require("../models/likeModel");

// exports.likePost = async (req, res) => {
//   try {
//     const { post, user } = req.body;

//     // Check if the user has already liked the post
//     const existingLike = await Like.findOne({ post, user });

//     if (existingLike) {
//       return res.status(400).json({
//         error: "You have already liked this post.",
//       });
//     }

//     const like = new Like({
//       post,
//       user,
//     });

//     const savedLike = await like.save();

//     // Update the post to add the like to the likes array
//     const updatedPost = await Post.findByIdAndUpdate(
//       post,
//       { $push: { likes: savedLike._id } },
//       { new: true }
//     );

//     res.json({
//       post: updatedPost,
//     });
//   } catch (err) {
//     return res.status(400).json({
//       error: "Error while liking the post",
//     });
//   }
// };

exports.unlikePost=async(req,res)=>{
    try{
        const {post,like}=req.body
        //find the delete id from like collection
        const deleteLike=await Like.findOneAndDelete({post:post,_id:like});
        //update the post collection ,for delet pull fucntion
        const updatedPost=await Post.findByIdAndDelete(post,{$pull:{likes:deleteLike._id} },{new:true});
        res.json({
            post:updatedPost, 
        })
    } 
    catch(err){
        return res.status(400).json({
            error:"Error while unliking the post", 
        })
        }
}