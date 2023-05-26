import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firestore } from "../config";
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot } from "firebase/firestore";

const auth = getAuth(firebase_app);


export default async function signUpWithEmailAndPassword(email, password) {
    let result = null
    let  error = null
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        const myStore = collection(firestore,"favorites")
       console.log("signup",result.user.uid)
       let data = {email:[]}
       try {
        setDoc(doc(firestore, 'favorites', email), {
            emojis: [],
          });
       }catch (err){
        console.log(err,"err")
      }
    } catch (err) {
        error = err;
    }

    return { result, error };
}
