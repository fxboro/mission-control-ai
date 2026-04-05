import * as admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  } catch (error) {
    console.error("Firebase Admin Initialization Error", error);
  }
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth, admin };
