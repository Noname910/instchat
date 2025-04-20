// Firebase Configuration for GitHub Pages
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
  try {
    // Initialize Firebase only if not already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    // Initialize analytics if available
    if (firebase.analytics) {
      try {
        firebase.analytics();
      } catch (analyticsError) {
        console.log('Analytics initialization error:', analyticsError);
      }
    }
    
    // Export Firebase services
    const auth = firebase.auth();
    const db = firebase.firestore();
    const storage = firebase.storage();
    
    // Configure Firebase Auth for GitHub Pages
    // Disable app verification for testing on GitHub Pages
    if (auth.settings) {
      auth.settings.appVerificationDisabledForTesting = true;
    }
    
    // Set persistence to LOCAL to maintain login state
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .catch(error => {
        console.error('Error setting auth persistence:', error);
      });
    
    // Add CORS configuration for GitHub Pages
    const corsSettings = {
      origin: window.location.origin,
      methods: ['GET', 'POST'],
      credentials: true
    };
    
    // Log authentication state for debugging
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in:', user.uid);
      } else {
        console.log('No user is signed in');
      }
    });
    
    // Enable offline persistence for Firestore with synchronization
    db.enablePersistence({synchronizeTabs: true})
      .catch((err) => {
        if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled in one tab at a time
          console.log('Persistence failed: Multiple tabs open');
        } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the features required for persistence
          console.log('Persistence not supported by this browser');
        } else {
          console.error('Firestore persistence error:', err);
        }
      });
      
    // Log initialization success
    console.log('Firebase initialized successfully on:', window.location.hostname);
    
  } catch (initError) {
    console.error('Firebase initialization error:', initError);
    // Display user-friendly error
    alert('Error initializing chat application. Please check console for details.');
  }
} else {
  console.error("Firebase SDK not loaded. Check script tags in HTML.");
  // Display user-friendly error
  alert('Firebase SDK not loaded. Please check your internet connection and try again.');
}
