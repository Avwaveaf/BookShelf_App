// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore,doc, getDoc, setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6CvBoofpZS15668B-eHosdd9sIDFM9c4",
  authDomain: "books-app-625bb.firebaseapp.com",
  projectId: "books-app-625bb",
  storageBucket: "books-app-625bb.appspot.com",
  messagingSenderId: "251271217253",
  appId: "1:251271217253:web:b91e238578c0f2aa58c68c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (authUser) => { 
    const userDocRef = doc(db, 'users', authUser.uid); // get user colletion data
    // this doc method will returning the uid document reference even tho there is no exist ref
    // console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef);// get users collection data
    // get doc also the same even thou  there is no exist collection firebase will returning the doc reference
    // right until this time this new user document are no exist if you check userSnapshot.exists() it will return false
    
    if (!userSnapshot.exists()) { 
        //@TODO  checking if this user reference are exitst on the data base
        // if exist the we just return the userSnapshot ref
        // but if not we gonna set the user reference to database with
        // setDoc method
        const { displayName, email } = authUser;// pulling this data first from parameter
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    // console.log(
    //     userSnapshot.data() // get the user Data
    // )
    // if user already exist then just return the userDocRef
    return userDocRef;
};
// export const createUserPostFromAuth = async(authUser, title, body) => { 
//     const userDocRef = doc(db, "userPost", authUser.uid);
//     const userPostSnapshot = await getDoc(userDocRef);
//     if (!userPostSnapshot.exists()) {
//         const createdAt = new Date();
//         try {
//             await setDoc(userDocRef, {
//                 createdBy: authUser.displayName,
//                 id: authUser.uid,
//                 title,
//                 body
//             })
//             return userPostSnapshot.data()
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     return userPostSnapshot.data()
// };