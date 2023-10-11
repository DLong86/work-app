import React from 'react'

const Modal = ({selectedNamesOrder}) => {

    const reversedList = selectedNamesOrder.slice().reverse();
    console.log("reveresed", reversedList);
  return (
    <div className='absolute top-1/4 left-1/4 w-1/2 h-80 border-2 rounded-lg border-white bg-gradient-to-b from-purple-800 to-purple-500 flex flex-col items-center overflow-y-scroll'>
        <h3 className='text-4xl font-extralight py-2 text-gray-400'>Reading List</h3>
        
       {reversedList.map((item,index) => (
        <p className='capitalize text-gray-200 text-2xl py-2 hover:text-3xl hover:text-white cursor-pointer'>{index + 1}: {item}</p>
       ))}
    </div>
  )
}

export default Modal
