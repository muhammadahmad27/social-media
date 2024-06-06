import React from 'react'
import './home.scss';
import Post from '../../components/posts/Posts';
import Stories from '../../components/stories/Stories';
import Share from "../../components/share/Share";

export default function Home() {
  return (
    <div className='home'>
      <Stories />
      <Share />
      <Post />
    </div>
  )
}
