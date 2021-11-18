import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQUs0Fqk4iOZCOWz_v2aAuokNHZd4rV6k",
    authDomain: "tiendademascotasreact.firebaseapp.com",
    projectId: "tiendademascotasreact",
    storageBucket: "tiendademascotasreact.appspot.com",
    messagingSenderId: "1071945339039",
    appId: "1:1071945339039:web:1e2826e2816a9c233e12aa"
  };

  const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
}  






