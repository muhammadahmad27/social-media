import React, { useContext } from 'react'
import './stories.scss';
import { AuthContext } from '../../context/authContext';

export default function Stories() {

    const {currentUser} = useContext(AuthContext)

    const stories = [
        {
            id : 1,
            name : "Ahmed",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU",
        },
        {
            id : 2,
            name : "Abdullah",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU",
        },
        {
            id : 3,
            name : "Ali",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU",
        },
        {
            id : 4,
            name : "Akasha",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU",
        },
    ];

  return (
    <div className='stories'>
        <div className="story">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU" alt="" />
                <span>Ahmed</span>
                <button>+</button>
        </div>  

        {stories.map((story) => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>   
        ))}
    </div>
  )
}
