import {initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// pexen's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz58olUErDHJGpEyEhsuzOJzu6ojlPEto",
  authDomain: "pexen-stzfao.firebaseapp.com",
  projectId: "pexen-stzfao",
  storageBucket: "pexen-stzfao.appspot.com",
  messagingSenderId: "131311812346",
  appId: "1:131311812346:web:693e39b895781e63801343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);