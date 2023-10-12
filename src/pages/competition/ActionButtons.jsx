import React from 'react'
import Button from '../../components/Button'

const ActionButtons = ({onModal, onWinner}) => {
  return (
    <div className=" w-72 flex gap-6 justify-between">
        <Button text="Add Player" onClick={onModal} />
        {/* <Button text="Winner" onClick={onWinner} /> */}
  </div>
  )
}

export default ActionButtons