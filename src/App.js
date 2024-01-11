import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReadingPage from "./pages/reading/ReadingPage";
import { TiThMenu } from "react-icons/ti";
import Home from "./pages/Home";
import CompetitionPage from "./pages/competition/CompetitionPage";
import Game from "./pages/game/Game";
import Navbar from "./Navbar";
import DiceGame from "./pages/dice/DiceGame";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <BrowserRouter>
      <div className="w-screen h-full bg-[#1a1b1b] text-[#5c6269]">
        {/* <div className='px-4 pt-2 z-50 bg-inherit flex items-end'> */}
        <div class="relative">
          <TiThMenu
            className="absolute top-2 left-2 text-3xl cursor-pointer text-[#495057] z-50 hover:text-white active:text-gray-500 duration-200"
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        {/* </div> */}
        <div
          className="w-screen h-full  flex flex-col items-center"
          onClick={() => setShowNav(false)}
        >
          {/* --- NAVBAR --- */}
          <ul
            className={
              !showNav
                ? "flex flex-col justify-around pt-10 pl-6 mt-0 text-2xl absolute top-0 left-0 w-full sm:w-2/3 md:w-1/3 lg:w-1/4 h-full z-20 bg-black bg-opacity-80 uppercase text-gray-400 translate-x-[-100%] duration-300"
                : "flex flex-col justify-around pt-10 pl-6 mt-0 text-2xl absolute top-0 left-0 w-full sm:w-2/3 md:w-1/3  lg:w-1/4 h-full z-20 bg-black bg-opacity-80 uppercase text-gray-400 translate-x-0 duration-300"
            }
          >
            <Navbar />
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/competition" element={<CompetitionPage />} />
            <Route path="/game" element={<Game />} />
            <Route path="/dice" element={<DiceGame />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
