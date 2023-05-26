import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";


const auth = getAuth(firebase_app);
export default async function logOut(){
    signOut(auth)
}

//export default const lotOut = ()=>{}