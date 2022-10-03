// import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';
// import StarsDisplay from './components/StarDisplay';
// import utils from './MathUtils';
// import PlayNumber from './components/PlayNumber';
// import PlayAgain from './components/PlayAgain';
import Game from './components/Game';

const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

export default StarMatch;