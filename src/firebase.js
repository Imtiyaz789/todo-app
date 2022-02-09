import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0kI_4gEncefoEvlapI0aDatmj9KUBLDU",
    authDomain: "todo-app-96c0e.firebaseapp.com",
    projectId: "todo-app-96c0e",
    storageBucket: "todo-app-96c0e.appspot.com",
    messagingSenderId: "234162405200",
    appId: "1:234162405200:web:dda816c28af331f9b2b655",
    measurementId: "G-3W5JGS7RRL"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};