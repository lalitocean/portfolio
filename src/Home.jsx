import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './Services'
import Contact from './Contact'
 
 
const Home = () => {

  const data={
    name:"Ocean's Code",
    image:"./images/hero.svg"
  }
  return (
     <>
     <HeroSection {...data}/>
     <Services/>
     <Contact/>
    

     </>
  )
}
export default Home