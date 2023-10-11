import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button className="w-full border-2 border-white bg-inherit hover:bg-[#ffe8cc] active:bg-gray-300 duration-200 rounded-md py-1 px-4 shadow-lg" onClick={onClick}>
        {text}
  </button>
  )
}

export default Button