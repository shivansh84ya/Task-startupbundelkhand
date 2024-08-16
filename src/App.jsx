import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import Page2 from '../components/Page2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'


const App = () => {
  return (
    <div className='parent'>
      <Navbar/>
      <LandingPage/>
      <Page2/>
     <Section3/>
     <Section4/>
     <Footer/>
    </div>
  )
}

export default App