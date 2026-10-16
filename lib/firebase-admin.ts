import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { isDedicatedProject, isDedicatedBucket } from "@/lib/firebase-isolation";
const clean = (value?: string) => (value?.trim() || "").replace(/^(?:"|')|(?:"|')$/g, "");
export function assertAdminEnv() {
  const projectId = clean(process.env.FIREBASE_ADMIN_PROJECT_ID);
  const expected = clean(process.env.NEXT_PUBLIC_FIREBASE_EXPECTED_PROJECT_ID);
  const clientProject = clean(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
  const bucket = clean(process.env.FIREBASE_ADMIN_STORAGE_BUCKET);
  const clientBucket = clean(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);
  const email = clean(process.env.FIREBASE_ADMIN_CLIENT_EMAIL);
  const key = clean(process.env.FIREBASE_ADMIN_PRIVATE_KEY);
  if (process.env.APP_MODE !== "live" || process.env.NEXT_PUBLIC_APP_MODE !== "live"
    || !isDedicatedProject(projectId, expected) || projectId !== clientProject
    || !isDedicatedBucket(bucket, projectId) || bucket !== clientBucket
    || !email.endsWith(`@${projectId}.iam.gserviceaccount.com`)
    || !key.includes("-----BEGIN PRIVATE KEY-----")) {
    const error = new Error("La conexión independiente de Salvador Alvarado no está habilitada o sus identificadores no coinciden.");
    error.name = "FirebaseAdminConfigurationError";
    throw error;
  }
}
function getAdminApp() {
  assertAdminEnv();
  const name = "tarjeta-joven-salvador-alvarado-server";
  return getApps().find((app) => app.name === name) || initializeApp({
    projectId: clean(process.env.FIREBASE_ADMIN_PROJECT_ID),
    credential: cert({ projectId: clean(process.env.FIREBASE_ADMIN_PROJECT_ID),
      clientEmail: clean(process.env.FIREBASE_ADMIN_CLIENT_EMAIL),
      privateKey: clean(process.env.FIREBASE_ADMIN_PRIVATE_KEY).replace(/\\n/g, "\n") }),
    storageBucket: clean(process.env.FIREBASE_ADMIN_STORAGE_BUCKET),
  }, name);
}
// Inicialización diferida: no hay credenciales predeterminadas ni conexiones durante el build.
function lazyService<T extends object>(factory: () => T): T {
  return new Proxy({} as T, { get(_target, property) {
    const service = factory();
    const value = Reflect.get(service, property, service);
    return typeof value === "function" ? value.bind(service) : value;
  }});
}
export const adminAuth = lazyService(() => getAuth(getAdminApp()));
export const adminDb = lazyService(() => getFirestore(getAdminApp()));
export const adminBucket = lazyService(() => getStorage(getAdminApp()).bucket());
async function verifiedUid(request: Request) {
  assertAdminEnv();
  const header = request.headers.get("authorization") || "";
  if (!header.startsWith("Bearer ")) throw new Error("NO_AUTH");
  return (await adminAuth.verifyIdToken(header.slice(7), true)).uid;
}
export async function requireAdmin(request: Request) {
  const uid = await verifiedUid(request);
  const document = await adminDb.collection("administradores").doc(uid).get();
  const rol = document.data()?.rol;
  if (!document.exists || (rol !== "Master" && rol !== "Staff")) throw new Error("NO_ADMIN");
  return { uid, rol };
}
export async function requireActiveBusiness(request: Request) {
  const uid = await verifiedUid(request);
  const document = await adminDb.collection("negocios").doc(uid).get();
  if (!document.exists || document.data()?.estatus !== "Activo") throw new Error("NO_BUSINESS");
  return { uid, negocio: document.data()! };
}
