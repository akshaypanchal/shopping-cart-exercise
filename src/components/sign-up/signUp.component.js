import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';


const SignUp = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [hash, setHash] = useState("");
    const [password, setPassword] = useState("");


    const addDataToDatabase = () => {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const data = re.test(String(email).toLowerCase());
        const saltRounds=10;

        if (firstName && lastName && email && password) {


            bcrypt.hash(password, saltRounds, function(err, hash){
                    setHash(hash);
                    if(err){
                        console.log("ture");
                    }
            });




            if (data) {
                axios.post("http://localhost:3000/signup", { firstName, lastName, email, password })
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
            else {
                alert("Please Enter the Vaid Email Address!!!");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
            }
        }
        else {
            alert("Please enter valid data!!!");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        }

    }


    return (
        <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input onChange={e => setFirstName(e.target.value)} value={firstName} id="fname" type="text" className="form-control" placeholder="enter the first name" required />
            <label className="form-label">Last Name:</label>
            <input onChange={e => setLastName(e.target.value)} value={lastName} id="lname" type="text" className="form-control" placeholder="enter the last name" required />
            <label className="form-label">Email:</label>
            <input onChange={e => setEmail(e.target.value)} value={email} id="email" type="email" className="form-control" placeholder="enter the email address" required />
            <label className="form-label">Password:</label>
            <input onChange={e => setPassword(e.target.value)} value={password} id="password" type="password" className="form-control" placeholder="Enter the password" required />
            <button onClick={() => addDataToDatabase()} className="btn btn-primary mb-3">Sign Up</button>
        </div>
    );


}

export default SignUp;