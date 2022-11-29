import React from "react";

export default function TestWrapper(props) {
  return (
    <section className="job flexHalf relative">
      <h3 className="jobTitle">{props.title ?? "Название"} </h3>
      {props.children}
    </section>
  );
}
