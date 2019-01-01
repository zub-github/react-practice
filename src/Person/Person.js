import React from "react";
import "./Person.css";
// import Radium from "radium";
const person = props => {
  // const style = {
  //   "@media (min-width:500px)": {
  //     width: "450px"
  //   }
  // };
  return (
    // <div className="person" style = {style}>
    <div className="person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old{" "}
      </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

// export default Radium(person);
export default person;

