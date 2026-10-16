import { existsSync } from 'node:fs';
import { isDedicatedProject, isDedicatedBucket } from '../lib/firebase-isolation.ts';
if (existsSync('.env.local')) process.loadEnvFile('.env.local');
const clientLive = process.env.NEXT_PUBLIC_APP_MODE === 'live';
const serverLive = process.env.APP_MODE === 'live';
if (!clientLive && !serverLive) {
  console.log('Modo presentación: registros y consultas de Firebase desactivados.');
  process.exit(0);
}
const required = ['NEXT_PUBLIC_FIREBASE_PROJECT_ID','NEXT_PUBLIC_FIREBASE_EXPECTED_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_API_KEY','NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN','NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID','NEXT_PUBLIC_FIREBASE_APP_ID',
  'FIREBASE_ADMIN_PROJECT_ID','FIREBASE_ADMIN_CLIENT_EMAIL','FIREBASE_ADMIN_PRIVATE_KEY',
  'FIREBASE_ADMIN_STORAGE_BUCKET','APP_URL','EMAIL_USER','EMAIL_APP_PASSWORD',
  'NEXT_PUBLIC_CONTACT_EMAIL','NEXT_PUBLIC_CONTACT_ADDRESS'];
const errors = required.filter(k => !process.env[k]?.trim()).map(k => `Falta ${k}`);
const id = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '';
if (!clientLive || !serverLive) errors.push('APP_MODE y NEXT_PUBLIC_APP_MODE deben ser live al mismo tiempo.');
if (!isDedicatedProject(id, process.env.NEXT_PUBLIC_FIREBASE_EXPECTED_PROJECT_ID || '')) errors.push('El ID debe ser el proyecto nuevo esperado de Salvador Alvarado.');
if (id !== process.env.FIREBASE_ADMIN_PROJECT_ID) errors.push('Los IDs web y Admin no coinciden.');
if (!isDedicatedBucket(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '', id) || process.env.FIREBASE_ADMIN_STORAGE_BUCKET !== process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET) errors.push('Los buckets no corresponden al nuevo proyecto o no coinciden.');
if (!process.env.FIREBASE_ADMIN_CLIENT_EMAIL?.endsWith(`@${id}.iam.gserviceaccount.com`)) errors.push('La cuenta de servicio no pertenece al nuevo proyecto.');
if (!process.env.FIREBASE_ADMIN_PRIVATE_KEY?.includes('-----BEGIN PRIVATE KEY-----')) errors.push('La clave Admin no tiene el encabezado esperado.');
try {
  const url = new URL(process.env.APP_URL || '');
  if (url.protocol !== 'https:' && url.hostname !== 'localhost') errors.push('APP_URL requiere HTTPS.');
  if (/elota|escuinapa/.test(url.hostname)) errors.push('APP_URL apunta a otro programa.');
} catch { errors.push('APP_URL no es una URL válida.'); }
if (process.env.VERCEL_PROJECT_ID === 'prj_bVGe6z4Hs2JAEltethGRDaNjR3dL') errors.push('Este es el proyecto Vercel original y no debe utilizarse.');
if (errors.length) {
  console.error('Configuración incompleta. Solo se muestran nombres, nunca valores:\n' + errors.map(e => '- '+e).join('\n'));
  process.exit(1);
}
console.log('Configuración independiente completa. Falta verificar el flujo real contra Firebase.');
