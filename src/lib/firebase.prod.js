import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!

const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: 'netflix-clone-9624f.firebaseapp.com',
      projectId: 'netflix-clone-9624f',
      storageBucket: 'netflix-clone-9624f.appspot.com',
      messagingSenderId: '949440650216',
      appId: '1:949440650216:web:322e3e7074891949ae225d',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!

// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
