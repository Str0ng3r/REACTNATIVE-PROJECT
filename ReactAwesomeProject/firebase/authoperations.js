import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setUser, setIsAuth } from '../Redux/slice';
import db from '../../ReactAwesomeProject/firebase/config';

export const signUpUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  }
}

export const signInUser = async (email, password) => {
  const auth = getAuth();
  const dispatch = useDispatch(); // Add this line to get access to dispatch
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    dispatch(setUser(user)); // Dispatch the action to update user state in Redux
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  }
}

export const logOut = async () => {
  const auth = getAuth();
  const dispatch = useDispatch(); // Add this line to get access to dispatch
  try {
    await signOut(auth);
    console.log('YOU ARE LOGOUT');
    dispatch(setIsAuth(false)); // Dispatch the action to update authentication state in Redux
  } catch (error) {
    console.log('ERROR SIGNOUT', error.message);
  }
}