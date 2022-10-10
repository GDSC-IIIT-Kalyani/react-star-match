import React from "react";

const RuleSet = ({ onRulesRead }) => {
  return (
    <div className="rules">
      <video autoPlay loop muted>
        <source
          src={require('../assets/starry-bg.mp4')}
          type="video/mp4"
        />
      </video>
      <div className="contents">
        <h1>React Star Match</h1>
        <h3>How it works</h3>
        <p>
          Match the number of <strong>stars</strong> (on the left) with the sum of
          one or more <strong>numbers</strong> (on the right)
          <br />
          <br />
          You have <strong>10 seconds</strong> to match them all and win, so be
          quick!
        </p>
        <button className="noselect" onClick={() => onRulesRead()}>Ok, let's start</button>
        <div>
      </div>
    </div>
    </div>
  );
};

export default RuleSet;
