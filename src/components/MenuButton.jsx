import React from 'react'

const MenuButton = ({onClick, children}) => {
  return (
    <button className="border-2 border-white bg-blue-400 hover:bg-inherit active:bg-blue-400 duration-200 rounded-md py-1 px-4" onClick={onClick}>{children}</button>
  )
}

export default MenuButton