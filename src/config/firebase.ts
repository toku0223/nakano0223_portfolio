// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore();



export const mailSystem = async (
  name: string,
  email: string,
  subject: string,
  message: string) => {
  let returnObj = ""
  console.log('firebase start')
  try {
    const docRef = await addDoc(collection(db, "mail"), {
      to: 'info@ktectoyonaka.com',
      from: `Ktec Contact Form<${email}>`,
      message: {
        subject: 'HPでお客様よりお問い合わせがありました。',
        html: `お名前：${name}<br />
        メールアドレス：${email}<br />
        件名：${subject}<br />
        本文：${message}<br />`,
      }
    });
    returnObj = "test1"
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    returnObj = "test2"
    console.error("Error adding document:", e)
  }
  return returnObj
}
