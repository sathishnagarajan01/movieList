import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: process.env.firebaseApiKey,
	authDomain: process.env.firebaseAuthDomain,
	projectId: process.env.firebaseProjectId,
	storageBucket: process.env.firebaseStorageBucket,
	messagingSenderId: process.env.firebaseMessagingSenderId,
	appId: process.env.firebaseAppId
};
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);