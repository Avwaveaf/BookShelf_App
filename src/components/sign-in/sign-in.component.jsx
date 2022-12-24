import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => { 
    const logGoogleUser = async () => {
        const {user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);

    }
    return <div>
        im sign in page'
        <button onClick={logGoogleUser}>SignIn With Google</button>
    </div>
};

export default SignIn;