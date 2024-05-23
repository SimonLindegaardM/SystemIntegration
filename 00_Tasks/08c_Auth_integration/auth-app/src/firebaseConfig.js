import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWWvER8YjyspegGgmMf9NMmRG2HSkhhjc",
  authDomain: "authsi.firebaseapp.com",
  projectId: "authsi",
  storageBucket: "authsi.appspot.com",
  messagingSenderId: "172798673720",
  appId: "1:172798673720:web:dac38c69b7f9087428b7cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
