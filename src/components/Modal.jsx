import React from 'react'

const Modal = ({selectedNamesOrder}) => {

    const reversedList = selectedNamesOrder.slice().reverse();
    console.log("reveresed", reversedList);
  return (
    <div className='absolute top-1/4 left-1/4 w-1/2 h-80 border-2 rounded-lg border-white bg-[#2a363b] flex flex-col items-center overflow-y-scroll'>
        <h3 className='text-4xl font-extralight py-2 text-[#ffe8cc] underline shadow-2xl'>Reading List</h3>
        
       {reversedList.map((item,index) => (
        <p className='capitalize text-gray-200 text-2xl py-2 hover:text-white cursor-pointer duration-200'>{index + 1}: {item}</p>
       ))}
    </div>
  )
}

export default Modal
