import React, {useState} from "react";


const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectData = async () => {
        console.warn(username, email, password);
        let result = await fetch("http://localhost:5000/signup", {
            method: 'post',
            body: JSON.stringify({username, email,password}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result)
    }

    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Username"
            value={username} onChange={(e)=> setUsername(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Email" 
            value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input className="inputBox" type="password" placeholder="Enter Password" 
            value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button className="signup-btn" type="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}

export default SignUp;