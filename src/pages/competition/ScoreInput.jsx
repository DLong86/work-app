import React, { useState } from 'react';

const ScoreInput = ({ player, onUpdate }) => {
  const [score, setScore] = useState('');

  const handleAddScore = () => {
    if (score !== '') {
      const updatedScores = [...player.scores, parseInt(score)];
      onUpdate(updatedScores);
      setScore('');
    }
  };

  // Calculate the total score by summing the scores array
  const totalScore = player.scores.reduce((total, score) => total + score, 0);

  return (
    <div className="w-full sm:w-1/2 flex flex-row items-center justify-between p-2 rounded-md shadow-lg bg-gray-200 hover:bg-[#ffe8cc]">
      <h2 className="capitalize">{player.name}</h2>
      <div className='flex gap-2'>
        <div className="flex gap-0">
          <input
            className='w-14 pl-2 rounded-l-md'
            min={0}
            max={50}
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <button className='bg-white rounded-r-md pr-1 text-2xl' onClick={handleAddScore}>+</button>
        </div>
        <input className="w-12 px-2 border-white bg-gray-200 rounded-md" value={totalScore} disabled/> {/* Display total score */}
      </div>
      {/* <ul className="">
        {player.scores.map((score, index) => (
          <li key={index} className="">
            Score: {score}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ScoreInput;
