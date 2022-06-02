import {initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// pexen's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
