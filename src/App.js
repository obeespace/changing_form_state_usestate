import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handlechange(event) {
    var { name, value } = event.target;
    setContact(function (prev) {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          value={contact.fName}
          placeholder="First Name"
          onChange={handlechange}
        />
        <input
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
          onChange={handlechange}
        />
        <input
          name="email"
          value={contact.email}
          placeholder="Email"
          onChange={handlechange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
