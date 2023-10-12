import React from 'react'
import { BiTrash} from "react-icons/bi"

const CompModal = ({onInput, playerName, playerList, onFormSubmit, onModal, onDelete, onWinnerModal}) => {
  return (
    <div className='absolute top-1/4 left-1/4 w-1/2 h-80 border-2 rounded-lg border-white bg-[#54535a] flex flex-col items-center overflow-y-scroll pt-4 text-white'>

       <button className='absolute top-0 right-5 font-semibold text-2xl text-gray-400 hover:text-white active:text-gray-400 mt-2' onClick={onModal}>X</button>
       <form className="" onSubmit={onFormSubmit}>
            <input className="text-gray-600 py-1 px-2 rounded-md capitalize" type="text" value={playerName} onChange={onInput} />
        </form>
        <div className="w-1/3 mt-4">
          <ul className="flex flex-wrap items-center gap-4">
            {playerList.length > 0 && playerList.map((player, index) => (
              <li className='border border-gray-200 w-full rounded-md px-2 flex flex-row items-center justify-between capitalize text-xl' key={index}>{player.name} <BiTrash className='cursor-pointer hover:text-red-300 active:text-red-500 duration-200' onClick={()=>onDelete(index)} /> </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default CompModal