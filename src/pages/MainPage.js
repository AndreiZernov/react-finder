import React from 'react'
import Hero from '../components/Hero'
import Recommend from '../components/Recommend'


const MainPage = () =>
    <>
      <Hero
        title="React Finder"
        subtitle={`Your guide to React JavaScript library. \n Everything about Learning React for Free at one place`}
        btn="Learn More"
        target='/overview'
      />
      <Recommend />
    </>


export default MainPage
