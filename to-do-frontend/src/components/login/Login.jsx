import { useState, useContext } from "react";
import "./login.css"
import CurrentUserContext from "../../user-context";
import email_img from "../../assets/email.png"
import password_img from "../../assets/password.png"
import {useNavigate} from "react-router-dom"

export default function Login(){ 
    const navigate = useNavigate()

    const {currentUser, setCurrentUser } = useContext(CurrentUserContext)
    const [action, setAction] = useState("Sign Up")
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log("submit", email, password);

        try {
            let response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response.user)
            navigate("/")
            setCurrentUser(response.user)
        } catch (error){
            console.log(error)
            setError(error.code)
        }
    }  

    // const handleSignUp = (e) => {
    //     e.preventDefault(); 
    //     console.log(e.target.value)

    //     fetch('http://localhost:8080/signup', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //           email: email,
    //           password: password,
    //           /* other user data */
    //         })
    //       })
    //       .then(res => res.json())
    //       .then(console.log);
    //       const newUser = response.json()
    //       setCurrentUser(newUser)
    //       console.log('made it to post -new user', currentUser)
    // }

    // const handleForm = (e) => {
    //     if (action === "signup") {
    //         handleSignUp()
    //     } else {
    //         handleSubmit()
    //     }
    // }

    return (
        <div className="container">
            <div className="header">
            <div className="text">{action}</div>
            </div>
            <div >
                <form className="sign-in-form" onSubmit={handleLogin}>
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
                    <button>Log In</button>
                </div>
            </form>
            </div> 
            <div className="forgot-password">Forgot Password? <span><link>Click Here</link></span></div> 
        </div>
    )
}