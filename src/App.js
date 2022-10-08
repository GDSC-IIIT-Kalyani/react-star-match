// import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';
// import StarsDisplay from './components/StarDisplay';
// import utils from './MathUtils';
// import PlayNumber from './components/PlayNumber';
// import PlayAgain from './components/PlayAgain';
import Game from './components/Game';
import RuleSet from './components/RuleSet';

const StarMatch = () => {
	const [gameStarted, setGameStarted] = useState(false);
	const [gameId, setGameId] = useState(1);

	if(! gameStarted) {
		return <RuleSet onRulesRead={() => setGameStarted(true)}/>;
	}
	
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

export default StarMatch;