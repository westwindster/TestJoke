import React, { useState, useCallback, useRef } from "react";

export default function GetIntervalJoke() {
  const [joke, setJoke] = useState("Здесь будет много шуток");
  const intervalRef = useRef(null);
  const getIntervalJoke = useCallback(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resp) => resp.json())
      .then((json) => setJoke(json.value));
  });
  const clickHandler = () => {
    if (intervalRef.current) {
      //stop jokking
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setJoke("Шутки кончились :(");
    } else {
      intervalRef.current = setInterval(getIntervalJoke, 3000);
      getIntervalJoke();
    }
  };

  const buttonCaption = intervalRef.current
    ? "Turn off Petrosyan"
    : "Start joking every 3 seconds";
  return (
    <div className="jokeControl">
      <div className="jokeDisplay">{joke}</div>
      <button onClick={clickHandler}>{buttonCaption}</button>
    </div>
  );
}
