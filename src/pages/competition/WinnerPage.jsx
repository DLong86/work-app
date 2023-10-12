import React from 'react'
import Button from '../../components/Button'

const WinnerPage = ({onReset}) => {
  return (
    <div className='w-2/3 h-screen flex flex-col items-center justify-around mt-6'>
        <h1 className="sm:text-4xl text-3xl">Winner</h1>
            <h3 className='sm:text-5xl text-3xl font-semibold'>🎖️ Person's Name 🎉</h3>
        <div className="w-20">
            <Button text="Reset" onClick={onReset} />
        </div>
    </div>
  )
}

export default WinnerPage