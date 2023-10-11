import { useState } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import ReadingPage from "./pages/reading/ReadingPage";
import {TiThMenu} from "react-icons/ti"
import Home from "./pages/Home";
import CompetitionPage from "./pages/competition/CompetitionPage";

function App() {
 const [showNav, setShowNav] = useState(false)

  return (
    <BrowserRouter>

    <div className="w-screen h-full bg-[#f1f3f2] text-[#495057]">
      {/* <div className='px-4 pt-2 z-50 bg-inherit flex items-end'> */}
       <div class="relative">
         <TiThMenu className="absolute top-2 left-2 text-3xl cursor-pointer text-[#495057] z-50 hover:text-white active:text-gray-500 duration-200" onClick={() => setShowNav(!showNav)} />
       </div>
      {/* </div> */}
      <div className="w-screen h-full  flex flex-col items-center" onClick={() => setShowNav(false)} >
      
      {/* --- NAVBAR --- */}
      <ul className={!showNav ? "flex flex-col justify-around pl-6 mt-0 text-3xl absolute top-0 left-0 w-full sm:w-1/3 h-full z-20 bg-black bg-opacity-80 uppercase text-gray-400 translate-x-[-100%] duration-300" : "flex flex-col justify-around pl-6 mt-0 text-3xl absolute top-0 left-0 w-full sm:w-1/3 h-full z-20 bg-black bg-opacity-80 uppercase text-gray-400 translate-x-0 duration-300"}>
        <li className='cursor-pointer hover:text-white active:text-gray-500 duration-200'>
          <Link to="/">Home</Link>
        </li>
        <li className='cursor-pointer hover:text-white  active:text-gray-500 duration-300'>
          <Link to="/reading">Reading Picker</Link>
         </li>
        <li className='cursor-pointer hover:text-white  active:text-gray-500 duration-200'>
          <Link to="/competition">competition</Link>
        </li>
      </ul>
      
         {/* Wrap these in routes */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/competition" element={<CompetitionPage />} />
          </Routes>
               
         
       </div>
      </div>
       </BrowserRouter>
  );
}

export default App;
