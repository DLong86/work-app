import React from 'react'

const Footer = () => {
    const date = new Date()
  return (
    <div className='absolute bottom-0 h-10'><small>{date.toDateString()}</small></div>
  )
}

export default Footer