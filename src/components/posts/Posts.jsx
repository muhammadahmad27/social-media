import React from 'react'
import './posts.scss';
import Post from '../post/Post';
import { makeRequest } from '../../axios';

import {   useQuery
} from '@tanstack/react-query'

export default function Posts() {

    const { isPending, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
        makeRequest.get("/posts").then(res => {
            return res.data;
          })
      })

      // console.log(data) 
    // const posts = [
    //     { 
    //         id : 1,
    //         name : "Ahmed",
    //         userId : 1,
    //         desc : "Lorem ipsum dolor sit amet, consectetur adip",
    //         profilePic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU",
    //         img : "https://static.vecteezy.com/system/resources/thumbnails/022/716/824/small/cute-cool-boy-dabbing-pose-cartoon-icon-illustration-people-fashion-icon-concept-isolated-generat-ai-free-photo.jpg",
    //     },
    //     {
    //         id : 2,
    //         name : "Akasha",
    //         userId : 2,
    //         desc : "lorem ipsum dolor sit lorem ipsum lorem ipsum lorem ipsum dolor sit lorem ipsum lorem ipsum lorem ipsum dolor sit lorem ipsum lorem ipsum",
    //         profilePic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU",
            
    //     },
        
    // ];

    const posts = [
      {
          id: 1,
          name: "Ali Zarar",
          userId: 1,
          profilePic:
            "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          // img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      
      {
          id : 2,
          name : "Hammad",
          userId : 2,
          desc : "lorem ipsum dolor sit lorem ipsum lorem ipsum lorem ipsum dolor sit lorem ipsum lorem ipsum lorem ipsum dolor sit lorem ipsum lorem ipsum",
          profilePic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU",
          img : "https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=600",
          
      },
      { 
        id : 1,
        name : "Ahmed",
        userId : 1,
        desc : "Lorem ipsum dolor sit amet, consectetur adip",
        profilePic : "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
        img : "https://images.pexels.com/photos/414012/pexels-photo-414012.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
      {
        id: 3,
        name: "Awais Nadeem",
        userId: 3,
        profilePic:
          "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
        img : "https://images.pexels.com/photos/1919030/pexels-photo-1919030.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      
      
  ];


  return (
    <div className='posts'>
        {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
    </div>
  )
}
