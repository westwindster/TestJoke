import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, removeLast } from "./redux/mainSlice";

export default function GetOneJoke() {
  const dispatch = useDispatch();
  const [joke, setJoke] = useState("Здесь будет шутка");
  const [haveJoke, setHaveJoke] = useState(false);
  const jokes = useSelector((store) => store.jokes.values);
  const isJokeWasAdded = jokes.reduce(
    (acc, el) => acc || el.id === joke.id,
    false
  );
  //const [wasAdded, setWasAdded] = useState(false);
  const getJoke = useCallback(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resp) => resp.json())
      .then((json) => {
        setJoke({ text: json.value, id: json.id });
        setHaveJoke(true);
        //setWasAdded(false);
      });
  });

  const addRemoveFavoriteJoke = useCallback((joke) => {
    if (isJokeWasAdded) {
      dispatch(remove(joke));
    } else {
      //need to add to favorite
      dispatch(add(joke));
    }
  });

  return (
    <div className="jokeControl">
      <div className="jokeDisplay">{joke.text}</div>
      <div style={{ display: "flex" }}>
        <button onClick={getJoke}>Get one Joke!</button>
        {haveJoke && (
          <button
            className="favoriteButton"
            onClick={() => addRemoveFavoriteJoke(joke)}
          >
            {isJokeWasAdded ? "Remove from favorite" : "Add to favorite"}
          </button>
        )}
      </div>
    </div>
  );
}
