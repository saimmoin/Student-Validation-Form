import React, { useState } from "react";
import "./App.css";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    username: "",
    email: "",
    password: "",
    class: "",
    section: "",
    rollnumber: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("FirstName", user.name);
    localStorage.setItem("LastName", user.username);
    localStorage.setItem("Email", user.email);
    localStorage.setItem("Password", user.password);
    localStorage.setItem("Class", user.class);
    localStorage.setItem("Section", user.section);
    localStorage.setItem("RollNumber", user.rollnumber);

    const re = /^[a-zA-Z]{1,11}$/;
    const re1 = /^[A-Z0-9._%+-]+@[A-Z0-9.]+\.[A-Z]{2,}$/i;
    const re2 = /^[a-zA-Z0-9]{8}$/;
    const re3 = /^[1-9]{1,2}$/;
    const re4 = /^[a-zA-Z]{1}$/;
    const re5 = /^[0-9]{1,6}$/;

    let namevalidated = re.test(user.name, user.username);
    let emailvalidated = re1.test(user.email);
    let passvalidated = re2.test(user.password);
    let classvalidate = re3.test(user.class);
    let sectionvalidate = re4.test(user.section);
    let rollnumbervalidate = re5.test(user.rollnumber);
    if (
      namevalidated &&
      emailvalidated &&
      passvalidated &&
      classvalidate &&
      sectionvalidate &&
      rollnumbervalidate
    ) {
      alert("Succesfully Registered");
    } else {
      // document.getElementById("fname").style.backgroundColor="red";
      // document.getElementById("lname").style.backgroundColor="red";
      // document.getElementById("email1").style.backgroundColor="red";
      // document.getElementById("password").style.backgroundColor="red";
      // document.getElementById("class1").style.backgroundColor="red";
      // document.getElementById("section1").style.backgroundColor="red";
      //document.getElementById("rollnumber1").style.backgroundColor="red";

      alert("Error404 :(");
      localStorage.clear();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input
        id="fname"
        placeholder="Should be written between 1-11 words."
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label>Last Name</label>
      <input
        id="lname"
        placeholder="Should be written between 1-11 words."
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label>Email</label>
      <input
        id="email1"
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label>Password</label>
      <input
        id="password"
        placeholder="Should be having the lenght of 8 characters."
        type="text"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label>Class</label>
      <input
        id="class1"
        placeholder="Should have the lenght of maximum 2 or minimum 1."
        type="text"
        name="class"
        value={user.class}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label>Section</label>
      <input
        id="section1"
        placeholder="Should have the lenght of 1 alphabet."
        type="text"
        name="section"
        value={user.section}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label>RollNumber</label>
      <input
        id="rollnumber1"
        placeholder="Should have the lenght of 6 numbers."
        type="text"
        name="rollnumber"
        value={user.rollnumber}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <button>Validation</button>
      <table>
        <tr>
          <th>
            FirstName:
            {localStorage.getItem("FirstName")}
          </th>
        </tr>
        <tr>
          <th>
            LastName:
            {localStorage.getItem("LastName")}
          </th>
        </tr>
        <tr>
          <th>
            Email:
            {localStorage.getItem("Email")}
          </th>
        </tr>
        <tr>
          <th>
            Password:
            {localStorage.getItem("Password")}
          </th>
        </tr>
        <tr>
          <th>
            Class:
            {localStorage.getItem("Class")}
          </th>
        </tr>
        <tr>
          <th>
            Section:
            {localStorage.getItem("Section")}
          </th>
        </tr>
        <tr>
          <th>
            RollNumber:
            {localStorage.getItem("RollNumber")}
          </th>
        </tr>
      </table>
    </form>
  );
};

export default AddUserForm;
