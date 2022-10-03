// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import StarsDisplay from './components/StarDisplay';
import utils from './MathUtils';
import PlayNumber from './components/PlayNumber';

const StarMatch = () => {
	const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);                    
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  
  const numberStatus = (number) =>{
    if (!availableNums.includes(number)){
      return 'used';
    }
    if (!candidateNums.includes(number)){
      return candidatesAreWrong ? 'wrong':'candidate';
    }
    return 'available';
  };
  
  const onNumberClick = (number, currentStatus) => {
    // currentStatus => newStatus
    if (currentStatus === 'used')
      return;
    
    const newCandidateNums = candidateNums.concat(number);
    if (utils.sum(newCandidateNums) !== stars)
      setCandidateNums(newCandidateNums);
    else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  }
    
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
					<StarsDisplay count={stars}/>
        </div>
        <div className="right">
        	{utils.range(1, 9).map(number =>
          	<PlayNumber 
              key={number} 
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
              />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

function App() {
  return (
    <StarMatch />
  );
}

export default App;
