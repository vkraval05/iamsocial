import React from 'react'
import './Home.scss'
import Stories from '../../Components/Stories/Stories'
import Posts from '../../Components/Posts/Posts'

const Home = () => {
  return (
    <div className='home'>
      <Stories />
      <Posts />
    </div>
  )
}

export default Home
