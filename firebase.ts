import { initializeApp, getApps } from "firebase/app";
import { browserLocalPersistence, inMemoryPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { isDedicatedProject, isDedicatedBucket } from "@/lib/firebase-isolation";
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "";
const expectedProjectId = process.env.NEXT_PUBLIC_FIREBASE_EXPECTED_PROJECT_ID || "";
const bucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "";
export const firebaseReady = process.env.NEXT_PUBLIC_APP_MODE === "live"
  && isDedicatedProject(projectId, expectedProjectId) && isDedicatedBucket(bucket, projectId)
  && !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY && !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  && !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID && !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
// En presentación no se heredan valores ni se persisten sesiones.
const config = firebaseReady ? {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId, storageBucket: bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
} : { apiKey: "presentation-disabled-no-requests", authDomain: "disabled.invalid",
  projectId: "disabled-salvador-alvarado", storageBucket: "disabled.invalid" };
const name = "tarjeta-joven-salvador-alvarado";
const app = getApps().find((app) => app.name === name) || initializeApp(config, name);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const authPersistenceReady = typeof window !== "undefined"
  ? setPersistence(auth, firebaseReady ? browserLocalPersistence : inMemoryPersistence).catch(() => {})
  : Promise.resolve();
