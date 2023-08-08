import { getAuth } from "firebase/auth";
import app from "../firebase/config";

// Инициализируем объект auth
const auth = getAuth(app);

export default auth;