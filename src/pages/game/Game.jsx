import React from 'react'
import Cards from "./Cards"
import Footer from '../../Footer'

const Game = () => {
  return (
    <div className='w-full h-screen relative  flex flex-col items-center'>
        <Cards />
        <Footer />
    </div>
  )
}

export default Game