import React, { useEffect } from "react";
import TestWrapper from "./TestWrapper";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, load, deleteAll } from "./redux/mainSlice";

export default function Favorites() {
  const jokes = useSelector((store) => store.jokes.values);
  const isJokesExists = jokes && jokes.length > 0;
  const dispatch = useDispatch();
  useEffect(() => {
    //on first mount
    dispatch(load());
  }, [dispatch]);

  return (
    <TestWrapper title={"Избранные шутки (" + jokes.length + "  шт)"}>
      {isJokesExists && (
        <>
          <button
            className="deleteButton"
            onClick={() => dispatch(deleteAll())}
          />
          <div className="favoriteWrapper">
            <div className="favoriteContainer">
              {jokes.map((el) => (
                <div className="favoriteElement">
                  <div className="favoriteJoke">
                    <button
                      className="smallDeleteButton"
                      onClick={() => dispatch(remove(el))}
                    />
                    {el.text}
                    <i className="jokeId">(id={el.id})</i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {!isJokesExists && <h2>Добавьте шутку</h2>}
    </TestWrapper>
  );
}
