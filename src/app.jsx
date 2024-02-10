import React from "react";
import FormInput from "./components/formInput";
import Validator from "./utils";

export default function App() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    email: "",
    age: "",
    phoneNumber: "",
    titleDesc: "",
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
      name: "titleDesc",
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

    const test = new Validator();
    const errObj = {};

    if (!test.validateEmail(formData.email)) {
      errObj.email = "contoh: test@mail.com";
    }

    if (!test.validatePassword(formData.password)) {
      errObj.password = "minimal 8 character dan tidak boleh ada spasi...";
    }

    if (!test.validateFullName(formData.fullName)) {
      errObj.fullName = "nama lengkap setidaknya 2 kata ya...";
    }

    if (!test.validateAge(formData.age)) {
      errObj.age = "setidaknya 2 angka umur yg boleh...";
    }

    if (!test.validatePhoneNumber(formData.phoneNumber)) {
      errObj.phoneNumber = "contoh: +62899XXXXX min. 11 max. 13";
    }

    if (!test.validateTitleDesc(formData.titleDesc)) {
      errObj.titleDesc = "kependekan atau kepanjangan. min. 8 max. 500";
    }

    if (!test.validateDate(formData.date)) {
      errObj.date = "formatnya MM-DD-YYYY / YYYY-MM-DD";
    }

    if (!test.validateString(formData.username)) {
      errObj.username = "tidak bole kosong atau spasi kosong ya..";
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
        <div className="input-container">
          {renderedInput}
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
