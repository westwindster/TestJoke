import React from "react";
import Favorites from "./Favorites";
import GetIntervalJoke from "./GetIntervalJoke";
import GetOneJoke from "./GetOneJoke";
import "./styles.css";
import TestWrapper from "./TestWrapper";

export default function App() {
  return (
    <div className="App">
      <h1>&lt;InCodeWeTrust /&gt;</h1>
      <h2>Клуб Фронтенд Джентельменов</h2>
      <div className="jobContainer">
        <TestWrapper title="Одиночная шутка">
          <GetOneJoke />
        </TestWrapper>
        <TestWrapper title="Периодические шутки">
          <GetIntervalJoke />
        </TestWrapper>
      </div>
      <Favorites />
    </div>
  );
}
