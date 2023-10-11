import React from 'react'

const Header = ({onModal, selectedNamesOrder}) => {
  return (
    <div className='h-20 w-full flex items-center justify-between px-4'>
        <h1 className="text-3xl font-thin ">Reading Picker</h1>
      {selectedNamesOrder.length > 0 ? <button className="border-2 border-white bg-blue-400 hover:bg-inherit active:bg-blue-400 duration-200 rounded-md py-1 px-4" onClick={onModal}>Order</button> : null}
    </div>
  )
}

export default Header