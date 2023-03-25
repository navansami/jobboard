import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../config/firebase"
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth"

const provider = new GoogleAuthProvider();

const Login = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate();

    // Login with Google
    const onSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken;
            const user = result.user;
            if(user) navigate("/home")
        })
        .catch(err => console.error(err));
    }

    // Login with username & password
    const onFormSubmitted = (e) => {
        e.preventDefault()

        if(!email && !password) alert("Form cannot be left blank")
        if(!email && password) alert("Enter email")
        if(email && !password) alert("Enter password")
        
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
                if(user) navigate('/home')
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="authform">
            <div className="login">
                <h2>Login</h2>
                
                {/* Email & Password Login */}
                <form className="form-group">

                    <div className="form-header">
                        <h3>Login with Email & Password</h3>
                    </div>

                    <div className="form-control">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="form-control">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button 
                        className="btn btn-regular" 
                        onClick={onFormSubmitted} 
                    >Login
                    </button>
                </form>
                {/* Google Login */}
                <button  
                    className="btn google" 
                    onClick={onSignIn}
                > <div className="g-icon"></div>Sign in with Google
                </button>
            </div>
            <div className="register">
                <h2>Register</h2>
            </div>
        </div>
    )
}

export default Login