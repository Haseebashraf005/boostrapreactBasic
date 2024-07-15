import React from 'react'
import { Footer, Header, Sidebar } from './components'
import { motion } from "framer-motion"


const App = () => {
  return (
    
    <div className="app-container">
      <Sidebar/>

      <div className="content w-100 d-flex flex-column justify-content-between">
      <Header />     


<div className="custom">
  this is main section
</div>
      <Footer />

      </div>

    </div>


    
  )
}

export default App