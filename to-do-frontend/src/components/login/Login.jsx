import React from "react";
import { useState, useContext } from "react";
import "./login.css"
import CurrentUserContext from "../../user-context";
import email_img from "../../assets/email.png"
import password_img from "../../assets/password.png"

export default function Login(){ 
    const {currentUser, setCurrentUser } = useContext(CurrentUserContext)
    const [action, setAction] = useState("Sign Up")
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/users')
        .then(res => res.json())
        .then((data) => {
            const user = data.users.find(
                (u) => u.email === email && u.password === password
                //need to update this to encrypt and hash 
            );
            if (user) {
                setCurrentUser(user)
                // console.log(currentUser)
            } else {
                console.log("Invalid Username or Password")
                //its now hitting this when you click on signup before submitting anything  
            }
        }) 
    }

    const handleSignUp = (e) => {
        e.preventDefault(); 
        console.log(e.target.value)

        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: email,
              password: password,
              /* other user data */
            })
          })
          .then(res => res.json())
          .then(console.log);
          const newUser = response.json()
          setCurrentUser(newUser)
          console.log('made it to post -new user', currentUser)
    }

    const handleForm = (e) => {
        if (action === "signup") {
            handleSignUp()
        } else {
            handleSubmit()
        }
    }

    return (
        <div className="container">
            <div className="header">
            <div className="text">{action}</div>
            </div>
            <div >
                <form className="sign-in-form" onSubmit={handleSubmit}>
                <div className="input">
                    <img src={email_img} alt=""/>
                    <input
                    value={email}
                    name="email"
                    placeholder="Email Address"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="input">
                    <img src={password_img} alt=""/>
                    <input
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                
                <div className="submit-container">
                    <button className={action === "Log In" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}} type="submit">Sign Up</button>
                    <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Log In")}}>Log In</button>
                </div>
            </form>
            </div> 
            {/* {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div> } */}
        </div>
    )
}