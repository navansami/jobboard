import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn6fSFGHqe2_zYSpJqZ-PWKUw6Ux_NLm8",
  authDomain: "jobboard-c9b5e.firebaseapp.com",
  projectId: "jobboard-c9b5e",
  storageBucket: "jobboard-c9b5e.appspot.com",
  messagingSenderId: "150723655546",
  appId: "1:150723655546:web:b047f5d7f064a7045488c3",
  measurementId: "G-FHPWWR6E2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
    auth
}