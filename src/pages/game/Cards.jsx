import React from 'react'
import useHoverLoop from './hooks/useHoverLoop';
import useQuestionText from './hooks/useQuestionText';
import Button from '../../components/Button';

const Cards = () => {
  const {hoverIndex, startHoverLoop} = useHoverLoop()
  const { text, handleHobbies, handleSports, handleTravel, handleGeneral, handleLife, handleHealth } = useQuestionText();

  return (
    <div className="w-[75%] h-screen mb-20">
      <div className="w-24 mt-10 mb-5 mx-auto">
        <Button text="Start" onClick={startHoverLoop} />
      </div>
      <div className='grid grid-cols-3 grid-rows-4 gap-6 py-4 px-4 sm:gap-8 sm:py-10 sm:px-10 rounded-lg text-white w-[95%]  mx-auto h-[80%]  bg-gray-100 font-bold text-xs md:text-sm lg:text-xl capitalize shadow-2xl'>
          <div id='hobbies' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 0 ? 'bg-blue-200' : ''}`} onClick={handleHobbies}>{text["hobbies"]}</div>
          <div id='sports' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 1 ? 'bg-blue-200' : ''}`} onClick={handleSports}>{text["sports"]}</div>
          <div id='travel' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 2 ? 'bg-blue-200' : ''}`} onClick={handleTravel}>{text["travel"]}</div>
          <div id='health' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 3 ? 'bg-blue-200' : ''}`} onClick={handleHealth}>{text["health"]}</div>
          <div id='hobbies2' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 4 ? 'bg-blue-200' : ''}`} onClick={handleHobbies}>{text["hobbies2"]}</div>
          <div id='life' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 5 ? 'bg-blue-200' : ''}`} onClick={handleLife}>{text["life"]}</div>
          <div id='general' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 6 ? 'bg-blue-200' : ''}`} onClick={handleGeneral}>{text["general"]}</div>
          <div id='travel2' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 7 ? 'bg-blue-200' : ''}`} onClick={handleTravel}>{text["travel2"]}</div>
          <div id='sports2' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 8 ? 'bg-blue-200' : ''}`} onClick={handleSports}>{text["sports2"]}</div>
          <div id='life2' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 9 ? 'bg-blue-200' : ''}`} onClick={handleLife}>{text["life2"]}</div>
          <div id='health2' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 10 ? 'bg-blue-200' : ''}`} onClick={handleHealth}>{text["health2"]}</div>
          <div id='general2' className={`bg-[#7595a8] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 shadow-md ${hoverIndex === 11 ? 'bg-blue-200' : ''}`} onClick={handleGeneral}>{text["general2"]}</div>
      </div>
    </div>
  )
}

export default Cards