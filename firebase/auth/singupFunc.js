import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUpWithEmailAndPassword(email, password) {
    let result = null
    let  error = null
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        error = err;
    }

    return { result, error };
}
