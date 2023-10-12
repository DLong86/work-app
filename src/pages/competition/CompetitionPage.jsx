import React, { useState } from 'react'
import Footer from '../../Footer'
import CompModal from '../../components/CompModal'
import ScoreInput from './ScoreInput'
import ActionButtons from './ActionButtons'
import WinnerPage from './WinnerPage'

const CompetitionPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [playerName, setPlayerName] = useState("")
  const [playerList, setPlayerList] = useState([])
  const [showWinner, setShowWinner] = useState(false)

  const handleInput = (e) => {
    setPlayerName(e.target.value)
  }
  console.log(playerName)

const handleSubmit = (e) => {
  e.preventDefault()
  // setPlayerList([...playerList, playerName])
  setPlayerList([...playerList, { name: playerName, scores: [] }]);
  setPlayerName("")
}

 // Define a function to update scores for a player
 const handleScoreUpdate = (index, scores) => {
  const updatedPlayerList = [...playerList];
  updatedPlayerList[index].scores = scores;
  setPlayerList(updatedPlayerList);
};

const handleModal = () => {
  setShowModal(!showModal)
}

const handleWinner = () => {
  setShowWinner(!showWinner)
}
const handleResetWinner = () => {
  setShowWinner(false)
}

const handleDelete = (index) => {
  const updatedPlayerList = playerList.filter((_, i) => i !== index);
  setPlayerList(updatedPlayerList);
};

  return (
    <div className={`w-full h-screen relative bg-[#f1f3f2] text-[#495057] flex flex-col items-center ${showModal ? 'modal-open' : ''}`} >
        <h1 className='text-5xl mt-6 font-bold'>Competition</h1>
        {!showWinner ? <><div className="mt-10">
         
          <ActionButtons onModal={handleModal} onWinner={handleWinner} />
         
          {showModal && <div className="modal-background">
            <CompModal playerName={playerName} onInput={handleInput} onFormSubmit={handleSubmit} playerList={playerList} onModal={handleModal} onDelete={handleDelete} />
          </div>}
        </div>
          <div className="h-screen sm:w-1/2 w-3/4 my-4 ">
            <ul className="w-full flex flex-col items-center justify-center gap-6 text-xl font-thin">
              {playerList.map((player, index) => <ScoreInput 
                player={player}
                key={index}
                onUpdate={(scores) => handleScoreUpdate(index, scores)}
              />)}
            </ul>
          </div>
          </> 
          :
           <WinnerPage onReset={handleResetWinner} />     
        }
    <Footer />
  </div>
  )
} 

export default CompetitionPage