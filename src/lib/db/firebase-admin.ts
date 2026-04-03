import * as admin from 'firebase-admin';

// Initialize Firebase Admin App if it hasn't been initialized
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(), // Assumes GOOGLE_APPLICATION_CREDENTIALS or local impersonation
      // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  } catch (error) {
    console.error('Firebase Admin Initialization Error', error);
  }
}

const db = admin.firestore();

// Optional: configure firestore settings if needed

export { db, admin };
