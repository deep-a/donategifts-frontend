import { initializeApp, getApps } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

if (getApps().length === 0) {
  initializeApp({
    apiKey: process.env.APP_API_KEY,
    authDomain: 'donategifts.firebaseapp.com'
  });
}

async function registerUserWithFireBase(data) {
  const { email, password } = data;
  try {
    const result = await createUserWithEmailAndPassword(getAuth(), email, password);
    return await result.user.getIdToken();
  } catch (error) {
    let errorMessage = error.message;
    if (error.code === 'auth/weak-password') {
      errorMessage = 'The password is too weak.';
    }

    throw new Error(errorMessage);
  }
}

async function loginUserWithFireBase(data) {
  const { email, password } = data;
  try {
    const result = await signInWithEmailAndPassword(getAuth(), email, password);
    return await result.user.getIdToken();
  } catch (error) {
    let errorMessage = error.message;
    if (error.code === 'auth/wrong-password') {
      errorMessage = 'Wrong password.';
    }

    throw new Error(errorMessage);
  }
}

export const registerSubmit = async (data) => {
  // regular user: firebase register (fetches token/error), call backend to store reg user if token
  // agency user: firebase register (fetches token/error), call backend to store agency user if token
  // return token/error
  try {
    return await registerUserWithFireBase(data);
  } catch (error) {
    console.error(error);
  }

  return false;
};

export const loginSubmit = async (data) => {
  // call firebase login (fetches token/error), get and return token/error
  try {
    return await loginUserWithFireBase(data);
  } catch (error) {
    console.error(error);
  }

  return false;
};
