import React, { useState } from "react";

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value} {props.type}</p>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={props.goodClicks} />
      <StatisticLine text="neutral" value={props.neutralClicks}/>
      <StatisticLine text="bad" value={props.badClicks}/>
      <StatisticLine text="all" value={props.all}/>
      { props.all > 0 &&
      <div>
      <StatisticLine text="average" value={(props.goodClicks - props.badClicks) / props.all}/>
      <StatisticLine text="positive" value={props.goodClicks / props.all * 100} type="%"/>
      </div>
      }
      </div>
  )
}

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0
  })

  const handleGoodClick = () => {
    setClicks(prevClicks => ({ ...prevClicks, good: prevClicks.good + 1, all: prevClicks.all + 1}));
  }
  
  const handleNeutralClick = () => {
    setClicks(prevClicks => ({ ...prevClicks, neutral: prevClicks.neutral + 1, all: prevClicks.all + 1 }));
  }
  
  const handleBadClick = () => {
    setClicks(prevClicks => ({ ...prevClicks, bad: prevClicks.bad + 1, all: prevClicks.all + 1 }));
  }
  
  return (  
    <div>
      <h1>give feedback</h1>
      
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <Statistics goodClicks={clicks.good} badClicks={clicks.bad} neutralClicks={clicks.neutral} all={clicks.all}/>
    </div>
  );
}

export default App;
