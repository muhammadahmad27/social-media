// import React, { useContext, useState } from 'react'
// import './post.scss'; 

// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
// import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import { Link } from 'react-router-dom';
// import Comments from '../comments/Comments';
// import moment from 'moment';
// import {
//     useQuery,
//     useMutation,
//     useQueryClient,
    
//   } from '@tanstack/react-query'
// import { makeRequest} from '../../axios'
// import { AuthContext } from '../../context/authContext';

// export default function Post({post}) {

//     const [openComment, setOpenComment] = useState(false);
//     const {currentUser} = useContext(AuthContext)
    
//     const { isPending, error, data } = useQuery({
//         queryKey: ['likes', post.id],
//         queryFn: () =>
//         makeRequest.get("/likes?postId="+post.id).then(res => {
//             return res.data;
//           })
//       })

//       const queryClient = useQueryClient();

//       const mutation = useMutation({
//         mutationFn: (liked) => {  
//           if(liked){
//             return makeRequest.delete("/likes?postId="+post.id)
//           }
//           else{
//             return makeRequest.post("/likes", {postId:post.id})  
//           }
          
//         },
//         onSuccess: () => {
//           // Invalidate and refetch
//           queryClient.invalidateQueries({ queryKey: ['likes'] })   //use this to refresh see query key in posts.jsx
//         },
//       })
    
    
//       const handleClick = () => {
//         // e.preventDefault();
//         mutation.mutate(data.includes(currentUser.id))
   
//       }


//     // const liked = false;
//   return (
//     <div className='post'>
//         <div className="container">
//         <div className="user">
//             <div className="userInfo">
//                 <img src={post.profilePic} alt="" />
//                 <div className="details">
//                     <Link to={`/profile/${post.userId}`} style={{textDecoration:'none', color: 'inherit'}}>
//                         <span className='name'>{post.name}</span>
//                     </Link>
//                         <span className='date'>{moment(post.createdAt).fromNow()}</span>
//                 </div>
//             </div>
//             <MoreHorizOutlinedIcon />
//         </div>
//         <div className="content">
//             <p>{post.description}</p>
//             <img src={"./upload/" + post.img} alt="" />
//         </div>
//         <div className="info">
//             <div className="item">
//                 {isPending ? 
//                 "wait..... " :
//                  data.includes(currentUser.id) ? <FavoriteOutlinedIcon onClick={handleClick} /> : <FavoriteBorderOutlinedIcon onClick={handleClick} /> }
//                 {data && data.length} Likes             
//             </div>
            
//             <div className="item" onClick = {() => setOpenComment(!openComment)}>
//                 <TextsmsOutlinedIcon />
//                 12 Comments                
//             </div>

//             <div className="item">
//             <ShareOutlinedIcon />
//                 Share
//             </div>

//         </div>
//         {openComment && <Comments postId={post.id} />}
//         </div>
//     </div>
//   )
// }




import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  // const liked = true;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(12); // Initial likes count

  const handleLikeClick = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">5 mins ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            <div onClick={handleLikeClick}>
              {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            </div>
              {likes} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            4 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
