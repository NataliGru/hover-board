import React, { useState, useEffect, createContext } from 'react';
import { getModes } from '../api/api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [modes, setModes] = useState([]);
  const [currentMode, setCurrentMode] = useState({ name: 'Pick mode' });
  const [showBoard, setShowBoard] = useState(false);
  const [moves, setMoves] = useState([]);



  console.log(currentMode)

  useEffect(() => {
    getModes()
      .then((data) => {
        setModes(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const size = currentMode.field;
  
    const allFilled = moves.length === currentMode.field ** 2;

  const handleModeChange = (newMode) => {
    setShowBoard(false);
    setCurrentMode(newMode);
    setMoves([]);
  };

  const handleStart = () => {
    if (currentMode.name !== 'Pick mode') {
      setShowBoard(true);
    }
  };

  const handleHover = (newMove) => {
    if (allFilled) {
      return;
    }

    if (moves.includes(newMove)) {
      setMoves((prevMoves) => prevMoves.filter((move) => move !== newMove));
    } else {
      setMoves((prevMoves) => [...prevMoves, newMove]);
    }
  };

  const handleNextLevel = () => {
    if (currentMode.name !== 'Pick mode' && modes.length > 0) {
      if (currentMode.id < modes.length - 1) {
        const nextMode = modes[currentMode.id];
        setCurrentMode(nextMode);
        setMoves([]);
        setShowBoard(true);
      }
    }
  };

  const onRemoveMove = (moveToRemove) => {
    setMoves((prevMoves) => prevMoves.filter((move) => move !== moveToRemove));
  };

  const onClearBoard = () => {
    setMoves([]);
  };

  const contextValue = {
    modes,
    size,
    currentMode,
    showBoard,
    moves,
    allFilled,
    handleModeChange,
    handleStart,
    handleHover,
    handleNextLevel,
    onRemoveMove,
    onClearBoard,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
