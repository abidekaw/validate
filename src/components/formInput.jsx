import React from "react";

export default function FormInput(props) {
  return (
    <div className="input--item">
      <label htmlFor={props.name}>{props.placeholder} :</label>
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <span>{props.errors}</span>
    </div>
  );
}
