import { initializeApp, getApps } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

if (getApps().length === 0) {
  initializeApp({
    apiKey: process.env.APP_API_KEY,
    authDomain: 'donategifts.firebaseapp.com',
  });
}

export interface IAuthResponse {
  token: string;
}

export async function registerUserWithFireBase(data: { email: string; password: string }): Promise<IAuthResponse> {
  const { email, password } = data;
  try {
    const result = await createUserWithEmailAndPassword(getAuth(), email, password);
    console.log('user created:', result);
    const token = await result.user.getIdToken();
    return { token };
  } catch (error) {
    const errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode === 'auth/weak-password') {
      errorMessage = 'The password is too weak.';
    }
    console.log(error);
    throw new Error(errorMessage);
  }
}

export async function loginUserWithFireBase(data: { email: string; password: string }): Promise<IAuthResponse> {
  const { email, password } = data;
  try {
    const result = await signInWithEmailAndPassword(getAuth(), email, password);
    const token = await result.user.getIdToken();
    return { token };
  } catch (error) {
    const errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      errorMessage = 'Wrong password.';
    }
    console.log(error);
    throw new Error(errorMessage);
  }
}
