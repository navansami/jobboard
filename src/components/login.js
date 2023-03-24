import { useNavigate } from "react-router-dom";

import { auth } from "../config/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const provider = new GoogleAuthProvider();

const Login = () => {

    const navigate = useNavigate();

    const onSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken;
            const user = result.user;
            navigate("/home")
        })
        .catch(err => console.error(err));
    }

    return <div>
        <button onClick={onSignIn}>Sign in with Google</button>
    </div>
}

export default Login