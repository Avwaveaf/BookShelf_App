import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import GoogleIcon from "../googleIcon/googleIcon.component";
import "./sign-in.style.scss"
import { useNavigate } from "react-router-dom";


const SignIn = () => { 
    const navigate = useNavigate();

    const logGoogleUser = async () => {
        const { user} = await signInWithGooglePopup();
        if (user) { 
            navigate('/')
        }
    }
    return <div className="sign-in-container">
    <div className="sign-in-card-container">
    <div className="sign-logo-container">
            <GoogleIcon iconName="login" style={ {fontSize:"40px", fontWeight:"bold"} } />
    </div>
        <span className="cta-title">Sign in to Continue</span>
        <button onClick={logGoogleUser}>SignIn With Google</button>
    </div>
    </div>
};

export default SignIn;