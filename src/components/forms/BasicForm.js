import React, { useState } from "react";

function BasicForm() {
    //Keep the data within input field while clicking Save Btn
    const handleSubBtn = (event)=>{
        event.preventDefault();
        console.log(`Name is ${name} and the email ID is ${email} and  user type is ${userType}`)
    };
    // Create useState to store the value in it
    // UseState is sets the default data and update Latest data in the same
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState(3);
  return (
    <div>
      <form onSubmit={handleSubBtn}>
        <label>
          Name :<input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/>
        </label>
        <br />
        <br />
        <label>
          Name :<input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
        </label>
        <br />
        <br />
        Select the User Type :
        <select value={userType} onChange={(event)=>{setUserType(event.target.value)}}> 
            <option value={1}>Super-Admin</option>
            <option value={2}>Admin</option>
            <option value={3}>Visiter</option>
        </select>
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default BasicForm;
