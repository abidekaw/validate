import React from "react";
import FormInput from "./components/formInput";
import validator from "./utils";

export default function App() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    email: "",
    age: "",
    phoneNumber: "",
    title: "",
    description: "",
    date: "",
    fullName: "",
  });
  const [errorMsg, setErrorMsg] = React.useState({});

  const attrInput = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "Username",
    },
    {
      id: 2,
      type: "password",
      name: "password",
      placeholder: "Password",
    },
    {
      id: 3,
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      id: 4,
      type: "number",
      name: "age",
      placeholder: "Age",
    },
    {
      id: 5,
      type: "tel",
      name: "phoneNumber",
      placeholder: "Phone Number",
    },
    {
      id: 6,
      type: "text",
      name: "title",
      placeholder: "Title",
    },
    {
      id: 7,
      type: "date",
      name: "date",
      placeholder: "Date",
    },
    {
      id: 8,
      type: "text",
      name: "fullName",
      placeholder: "Fullname",
    },
  ];

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      const { name, value } = event.target;
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const test = new validator();
    const errObj = {};

    if (!test.validateEmail(formData.email)) {
      errObj.email = "e.g. test@mail.com";
    }

    setErrorMsg(errObj);

    if (Object.keys(errObj).length === 0) alert("Berhasil submit!");
  };

  const renderedInput = attrInput.map((attr) => (
    <FormInput
      key={attr.id}
      onChange={handleChange}
      value={formData[attr.name]}
      errors={errorMsg[attr.name]}
      {...attr}
    />
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Validasi</h1>
        {renderedInput}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
