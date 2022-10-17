import React, { useState } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';

function Travel() {
  const [value, setValue] = useState("rafting");
  const [date, setDate] = useState("startDate");
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        event: value,
        bookingDate: date,
        person,
        phone: number,
        email,
        name,
      }),
    })
      .then((res) => res.json())
      .then((val) => {
        setValue("");
        setMsg(val.message);
        setTimeout(() => {
          setMsg();
        }, 3000)
      })
      .catch();
  };
  return (
    <div className="image-section1">
    <h1>Booking form</h1>
      {/* <h1>Rafting</h1>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Select
      </Dropdown.Toggle>
      <button>Book Now</button>

      <Dropdown.Menu>
        <Dropdown.Item href="">RS 500 (30 minutes(Per Person))</Dropdown.Item>
        <Dropdown.Item href="">RS 1000 (60 minutes(Per Person))</Dropdown.Item>
        <Dropdown.Item href="">RS 1500 (1H 30 minutes(Per Person))</Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown> */}
      {/* <select
        onChange={(e) => {
          console.log("szwxedcrftvgbyhnjm", e.target.value);
          setValue(e.target.value);
        }}
      >
        <option value="500">Rs 500 for for 30minutes (Per person)</option>
        <option value="1000">Rs 1000 for 1 hour(Per person)</option>
      </select>
      <input
        type="date"
        id="birthday"
        name="birthday"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          console.log("20/08/2002", e.target.value);
        }}
      /> */}
      <div className="container">
      <div className="form-section">
      <form onSubmit={(e) => handleLogin(e)}>
        <label for="product">Please Select:</label>
        <select
          onChange={(e) => {
            setValue(e.target.value);
            console.log("e.target.value", e.target.value);
          }}
        >
          <option value="rafting">Rafting</option>
          <option value="paragliding">ParaGliding</option>
        </select><br/>
        
        <label for="date">Start Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            console.log("e.target.value", e.target.value);
          }}
        ></input>
        <label for="date1">End Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            console.log("e.target.value", e.target.value);
          }}
        ></input>
        <label for="person">Number of persons</label>
        <select
          onChange={(e) => {
            setPerson(e.target.value);
            console.log("e.target.value", e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="number"
          placeholder="Mobile Number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
            console.log("e.target.value", e.target.value);
          }}
        ></input>

        <button>Book Now</button>
      </form>
      </div>
      </div>
      <div className="msg">
        <h1>{msg}</h1>
      </div>
      <img src="./vince-fleming-bb2iXgjGpVg-unsplash.jpg"></img>
    </div>
  );
}

export default Travel;
