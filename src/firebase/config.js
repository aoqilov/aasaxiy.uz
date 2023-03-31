import { initializeApp } from "firebase/app";
// asosiy kluclani render qiladi
import { getDatabase } from "firebase/database";
// getdatabase olingna appni kodini ocib qoyadi
const firebaseConfig = {
  apiKey: "AIzaSyC_zEV-gIJbQzetBK818SvTvixpoYwB3xI",
  authDomain: "asaxiyuuz.firebaseapp.com",
  projectId: "asaxiyuuz",
  storageBucket: "asaxiyuuz.appspot.com",
  messagingSenderId: "364574714299",
  appId: "1:364574714299:web:5a64d8e9899dcc20ea3c9e",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
