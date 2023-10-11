import {useState} from 'react'

const DatePage = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const handleChange = () => {
      setCount(0)
      setStep(1)
  }

  const date = new Date()
  date.setDate(date.getDate() + count)
  
  return (
    <div className='flex flex-col items-center'>
        <div className="my-4">
          <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} />
          <span className='my-4 py-4'> Step: {step} </span>
        </div>

        <div className="">
          <button className='border-2 bg-white px-2 text-black' onClick={() => setCount(prev => prev - step)}>-</button>
          <input className='text-black' type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
          <button className='border-2 bg-white px-2 text-black' onClick={() => setCount(prev => prev + step)}>+</button>
        </div>

        <p className='text-4xl my-4'>
          <span className='text-[#dbdbdb]'>
          {count === 0 
          ? "Today is " 
          : count > 0 
          ? `${count} day${count === 1 ? "" : "s"} from today is ` 
          : `${Math.abs(count)} day${count === -1 ? "" : "s"} ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {count !== 0 || step !== 1 ? <div className="">
          <button className='border-2 border-white px-4 py-1 rounded-md hover:bg-white hover:text-gray-500 hover:border-[#dbdbdb] duration-300' onClick={handleChange}>Reset</button>
        </div> : null}
    </div>
  )
}

export default DatePage