import React from 'react'
import MenuButton from './components/MenuButton'
import {TiThMenu} from "react-icons/ti"

// Move this to the main app component
const Header = ({onModal, selectedNamesOrder}) => {
  return (
    <div className='h-20 w-full flex items-center justify-between px-4 bg-transparent py-4'>
        {/* <h1 className="text-3xl font-thin cursor-pointer"><TiThMenu /></h1> */}
      <div className="flex gap-4 bg-inherit">
        {selectedNamesOrder.length > 0 ? <MenuButton onClick={onModal}>Order</MenuButton> : null} 
      </div>
    </div>
  )
}

export default Header