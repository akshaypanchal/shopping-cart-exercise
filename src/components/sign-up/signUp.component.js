import React, { useState } from 'react';
import axios from 'axios';



const SignUp = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const addDataToDatabase = () =>{

        axios.post("http://localhost:3000/signup", {firstName, lastName, email, password})
        .then(function (response) {
            console.log(response)
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        })
        .catch(function (error) {
            console.log(error);
        })
    
    }


    return(
        <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input onChange={e=> setFirstName(e.target.value)} value={firstName} id="fname" type="text" className="form-control" placeholder="enter the first name" required/>
            <label className="form-label">Last Name:</label>
            <input onChange={e=> setLastName(e.target.value)} value={lastName} id="lname" type="text" className="form-control" placeholder="enter the last name" required/>
            <label className="form-label">Email:</label>
            <input onChange={e=> setEmail(e.target.value)} value={email} id="email" type="email" className="form-control" placeholder="enter the email address" required/>
            <label className="form-label">Password:</label>
            <input onChange={e=> setPassword(e.target.value)} value={password} id="password" type="password" className="form-control" placeholder="Enter the password" required/>
            <button onClick={()=>addDataToDatabase()} className="btn btn-primary mb-3">Sign Up</button>
        </div>
    );


}

export default SignUp;