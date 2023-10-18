import { useState } from 'react';
import hobbies from '../db/hobbies';
import sports from "../db/sports";
import travel from "../db/travel"
import general from "../db/general"
import life from '../db/life';
import random from "../db/random"

const useQuestionText = () => {
    const [text, setText] = useState({
      hobbies: "hobbies",
      hobbies2: "hobbies",
      sports: "sports",
      sports2: "sports",
      travel: "travel",
      travel2: "travel",
      random: "random",
      random2: "random",
      life: "life",
      life2: "life",
      general: "general",
      general2: "general",
    });
  
    const handleHobbies = (e) => {
      const item = hobbies[Math.floor(Math.random() * hobbies.length)].question;
      const divId = e.target.id;
  
      if (divId === 'hobbies' || divId === 'hobbies2') {
        setText((prevTexts) => ({
          ...prevTexts,
          [divId]: prevTexts[divId] === 'hobbies' ? item : 'hobbies',
        }));
      }
    };
  
    const handleSports = (e) => {
      const item = sports[Math.floor(Math.random() * sports.length)].question;
      const divId = e.target.id;
  
      if (divId === 'sports' || divId === 'sports2') {
        setText((prevTexts) => ({
          ...prevTexts,
          [divId]: prevTexts[divId] === 'sports' ? item : 'sports',
        }));
      }
    };
  
    const handleTravel = (e) => {
      const item = travel[Math.floor(Math.random() * travel.length)].question;
      const divId = e.target.id;
  
      if (divId === 'travel' || divId === 'travel2') {
        setText((prevTexts) => ({
          ...prevTexts,
          [divId]: prevTexts[divId] === 'travel' ? item : 'travel',
        }));
      }
    };
  
    const handleGeneral = (e) => {
      const item = general[Math.floor(Math.random() * general.length)].question;
      const divId = e.target.id;
  
      if (divId === 'general' || divId === 'general2') {
        setText((prevTexts) => ({
          ...prevTexts,
          [divId]: prevTexts[divId] === 'general' ? item : 'general',
        }));
      }
    };
  
    const handleLife = (e) => {
      const item = life[Math.floor(Math.random() * life.length)].question;
      const divId = e.target.id;
  
      if (divId === 'life' || divId === 'life2') {
        setText((prevTexts) => ({
          ...prevTexts,
          [divId]: prevTexts[divId] === 'life' ? item : 'life',
        }));
      }
    };
  
    const handleRandom = (e) => {
      const item = random[Math.floor(Math.random() * random.length)].question;
      const divId = e.target.id;
  
      if (divId === 'random' || divId === 'random2') {
        setText((prevTexts) => ({
          ...prevTexts,
          [divId]: prevTexts[divId] === 'random' ? item : 'random',
        }));
      }
    };
  
    return { text, handleHobbies, handleSports, handleTravel, handleGeneral, handleLife, handleRandom };
  };

export default useQuestionText;
