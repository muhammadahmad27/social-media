import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Excellent👌❤️",
      name: "Arsal Jadoon",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Great 😘💕",
      name: "Sami Ullah",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/889511/pexels-photo-889511.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      desc: "❤️👌",
      name: "Awais Nadeem",
      userId: 3,
      profilePicture:
        "https://images.pexels.com/photos/6652959/pexels-photo-6652959.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 4,
      desc: "good pic",
      name: "Ahmed",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;


// import React, { useContext, useState } from 'react'
// import './comments.scss';
// import {
//     useQuery,
//     useMutation,
//     useQueryClient,
    
//   } from '@tanstack/react-query'
// import { makeRequest} from '../../axios'
// import { AuthContext } from '../../context/authContext';
// import moment from 'moment';

// export default function Comments({postId}) {

    
//     const [description, setDesc] = useState("");

//     const {currentUser} = useContext(AuthContext);

//     const { isPending, error, data } = useQuery({
//         queryKey: ['comments'],
//         queryFn: () =>
//         makeRequest.get("/comments?postId="+postId).then(res => {
//             return res.data;
//           })
//       })

//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: (newComments) => {
        
//       return makeRequest.post("/comments", newComments)
//     },
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ['comments'] })   //use this to refresh see query key in posts.jsx
//     },
//   })


//   const handleClick = (e) => {
//     e.preventDefault();

//     console.log(postId)
//     mutation.mutate({description, postId})
//     setDesc("")
//   }
   
//   return (
//     <div className='comments'>
//         <div className="write">
//             <img src={currentUser.profilePic} alt="" />
//             <input type="text" placeholder='write comment here' value={description} onChange={(e) => setDesc(e.target.value)}/>
//             <button onClick={handleClick}>Send</button>
//         </div>
//         {isPending ? "wait...." : data.map((comment) => (
//             <div className="comment">
//                 <img src={comment.profilePic} alt="" />
//                 <div className="info">
//                     <span>{comment.name}</span>
//                     <p>{comment.description}</p>
//                 </div>
//                 <span className='date'>{moment(comment.createdAt).fromNow()}</span>
//             </div>
//         ))}
//     </div>
//   )
// }
