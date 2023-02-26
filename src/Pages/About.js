import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Paragraph from '../Components/Paragraph'

const About = ({heading1}) => {
  return (
    <div>
      <h1>THis is about page</h1>
        <Navbar/>
        <Paragraph/>
        <Footer/>
    </div>
  )
}

export default About