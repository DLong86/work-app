import React from 'react'
import Footer from '../Footer'
import Typed from "react-typed"

const Home = () => {
  return (
    <div className="w-full h-screen relative bg-[#f1f3f2] text-[#495057] flex flex-col items-center justify-center" >
        <h1 className='text-5xl'>
        <Typed
						className='md:text-7xl sm:text-4xl text-xl font-semibold pl-2 md:pl-4'
						strings={[
							'Hello',
							'Ciao',
							'olá',
							'Bonjour',
							'こんにちは',
							'Guten Tag',
							'Good-Day',
							'مرحبًا',
							"Hiya",
							"Yo!",
							"Aloha",
							"안녕하세요"

						]}
						typeSpeed={120}
						backSpeed={150}
						loop
					/>
        </h1>
        
            
        
    <Footer />
  </div>
  )
}

export default Home