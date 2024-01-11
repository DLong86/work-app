import { useState } from "react";
import Dice from "react-dice-roll";

const WordleHome = () => {
  return (
    <div className="w-full h-screen relative bg-[#171a18] text-white flex flex-col items-center py-12">
      <img src="/images/vegas.png" alt="vegas logo" className="mt-0 h-40" />
      <div className="my-20 flex gap-24">
        <Dice size={200} />
        <Dice size={200} />
      </div>
    </div>
  );
};

export default WordleHome;
