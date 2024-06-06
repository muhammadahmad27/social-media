// import React, { useContext } from 'react'
// import './profile.scss';
// import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import PlaceIcon from '@mui/icons-material/Place';
// import LanguageIcon from '@mui/icons-material/Language';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Posts from '../../components/posts/Posts' ;
// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
  
// } from '@tanstack/react-query'
// import { makeRequest} from '../../axios'
// import { useLocation } from 'react-router-dom';
// import { AuthContext } from '../../context/authContext';

// export default function Profile() {

//   const {currentUser} = useContext(AuthContext);
//   const userId = parseInt(useLocation().pathname.split('/')[2])

//   const { isPending, error, data } = useQuery({
//     queryKey: ['user'],
//     queryFn: () =>
//     makeRequest.get("/users/find/"+userId).then(res => {
//         return res.data;
//       })
//   })

//   const { isPending : rLoading , data:rldata } = useQuery({
//     queryKey: ['relationship'],
//     queryFn: () =>
//     makeRequest.get("/relationships?followedUserId="+userId).then(res => {
//         return res.data;
//       })
//   })

//   const queryClient = useQueryClient();

//       const mutation = useMutation({
//         mutationFn: (liked) => {  
//           if(liked){
//             return makeRequest.delete("/relationships?followedUserId="+userId)
//           }
//           else{
//             return makeRequest.post("/relationships",{ userId })  
//           }
          
//         },
//         onSuccess: () => {
//           // Invalidate and refetch
//           queryClient.invalidateQueries({ queryKey: ['relationship'] })   //use this to refresh see query key in posts.jsx
//         },
//       })
    
    
//       const handleFollow = () => {
//         // e.preventDefault();
//         mutation.mutate(rldata.includes(currentUser.id))
   
//       }

//   return (
//     <div className='profile'>
//       {error ? "error is here" : (isPending ? "wait....." : <> <div className="images">
//         <img className='cover' src={data.coverPic}  alt="" />
//         <img className='profilePic' src={data.profilePic} alt="" />
//       </div>
//       <div className="profileContainer">
//         <div className="uInfo">
//           <div className="left">
//             <a href="https://">
//               <FacebookTwoToneIcon fontSize='medium'/>
//             </a>
//             <a href="https://">
//               <InstagramIcon fontSize='medium'/>
//             </a>
//             <a href="https://">
//               <TwitterIcon fontSize='medium'/>
//             </a>
//             <a href="https://">
//               <LinkedInIcon fontSize='medium'/>
//             </a>
//             <a href="https://">
//               <PinterestIcon fontSize='medium'/>
//             </a>
//           </div>

//           <div className="center">
//             <span>{data.name}</span>
//             <div className="info">
//               <div className="item">
//                 <PlaceIcon />
//                 <span>{data.city}</span>
//               </div>

//               <div className="item">
//                 <LanguageIcon />
//                 <span>Urdu</span>
//               </div>
//             </div>
//               {rLoading ? "wait .... " : currentUser.id === userId ? <button>Update</button> :<button onClick={handleFollow}>{rldata.includes(currentUser.id) ? "Following" : "Follow"}</button>}
            
//           </div>
//           <div className="right">
//             <EmailOutlinedIcon />
//             <MoreVertIcon />
//           </div>
//         </div>
//           <Posts />
//       </div></>)}
//     </div>
//   )
// }





import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src={currentUser.profilePic}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Pakistan</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;