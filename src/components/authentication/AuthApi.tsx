import firebase from 'firebase/app';
import 'firebase/auth';

// if (firebase.apps.length === 0) {
//   firebase.initializeApp({
//     apiKey: process.env.NEXT_PUBLIC_apiKey,
//     authDomain: process.env.NEXT_PUBLIC_authDomain,
//     databaseURL: process.env.NEXT_PUBLIC_databaseURL,
//     projectId: process.env.NEXT_PUBLIC_projectId,
//     storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//     messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//     appId: process.env.NEXT_PUBLIC_appId,
//   });
// }

export interface IAuthResponse {
  token: string;
}

export async function registerUserWithFireBase(data: {
  email: string;
  password: string;
}): Promise<IAuthResponse> {
  const { email, password } = data;
  try {
    let token = '';
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log('user created');
    token = await result.user.getIdToken();
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

export async function loginUserWithFireBase(data: {
  email: string;
  password: string;
}): Promise<IAuthResponse> {
  const { email, password } = data;
  try {
    let token = '';
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    token = await result.user.getIdToken();
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
