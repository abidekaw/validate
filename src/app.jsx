import React from "react";
import { validateEmail, validatePassword, validateString } from "./utils";

export default function App() {
  const [data, setData] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateString(data) ? setErrorMsg("Valid") : setErrorMsg("Invalid");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>validasi</h1>
      <input
        type="text"
        value={data}
        onChange={handleChange}
        autoComplete="off"
      />
      {errorMsg && <span style={{ lineHeight: "40px" }}>{errorMsg}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
