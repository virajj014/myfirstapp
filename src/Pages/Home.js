import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Paragraph from '../Components/Paragraph'

const Home = () => {
  return (
    <div>
      {/* navbar , paragraph , footer */}
      <h1>THis is home page</h1>
      <Navbar/>
      <Paragraph/>
      <Footer/>
    </div>
  )
}

export default Home