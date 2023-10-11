import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button className="w-full max-w-34 text-xl rounded-md border-2 border-[#dbdbdb] bg-inherit text-white hover:bg-blue-400 active:border-white active:text-gray-500 px-2 py-1 duration-200" onClick={onClick}>
        {text}
  </button>
  )
}

export default Button