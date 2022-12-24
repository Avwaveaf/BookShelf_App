import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => { 
    const logGoogleUser = async () => {
         await signInWithGooglePopup();

    }
    return <div>
        im sign in page'
        <button onClick={logGoogleUser}>SignIn With Google</button>
    </div>
};

export default SignIn;