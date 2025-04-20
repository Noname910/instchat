// Firebase Configuration
// Using Firebase compat version for easier integration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxMKzy7hB5uKa2fmIaORXrS7teNymNULA",
  authDomain: "instchat-79b7c.firebaseapp.com",
  projectId: "instchat-79b7c",
  storageBucket: "instchat-79b7c.firebasestorage.app",
  messagingSenderId: "459323121378",
  appId: "1:459323121378:web:8fe3bd9aac6b6de55f88bb",
  measurementId: "G-94PH1DFB92"
};

// Make sure Firebase is defined before initializing
if (typeof firebase !== 'undefined') {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Initialize analytics if available
  if (firebase.analytics) {
    firebase.analytics();
  }
  
  // Export Firebase services
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
  
  // Configure Firebase Auth to work with the temporary domain
  auth.settings.appVerificationDisabledForTesting = true;
  
  // Add authorized domains for testing
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  
  // Enable offline persistence for Firestore
  db.enablePersistence({synchronizeTabs: true})
    .catch((err) => {
      if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled in one tab at a time
        console.log('Persistence failed: Multiple tabs open');
      } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the features required for persistence
        console.log('Persistence not supported by this browser');
      }
    });
} else {
  console.error("Firebase SDK not loaded. Check script tags in HTML.");
}
