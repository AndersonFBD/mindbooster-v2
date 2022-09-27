import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyC3iN-RIlWowH4CGHqkL_hImkfDAsJehmQ",
  
    authDomain: "mindbooster-f41d0.firebaseapp.com",
  
    projectId: "mindbooster-f41d0",
  
    storageBucket: "mindbooster-f41d0.appspot.com",
  
    messagingSenderId: "735047454912",
  
    appId: "1:735047454912:web:d5115f7dcdb316651c5d25"
  
  };

  
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export default app;