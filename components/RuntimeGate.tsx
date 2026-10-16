"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { firebaseReady } from "@/firebase";
import { MUNICIPIO } from "@/lib/municipio";
import { CardSample } from "@/components/CardSample";
export default function RuntimeGate({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  if (firebaseReady || path === "/" || path === "/aviso-de-privacidad") return children;
  const business = path === "/login-negocio" || path === "/portal-negocios";
  const admin = path === "/administracion";
  const directory = path === "/directorio";
  return <main className="sa-prelaunch">
    <Link href="/" className="sa-back">← Volver al inicio</Link>
    <div className="sa-prelaunch-grid"><section>
      <div className="sa-eyebrow">SALVADOR ALVARADO · SINALOA</div>
      <h1>{directory ? "Una comunidad que crece contigo." : admin ? "Equipo del programa." : business ? "Tu negocio, más cerca de las juventudes." : "Tu próximo beneficio está cerca."}</h1>
      <p className="sa-lead">{directory ? "Aquí podrás encontrar los negocios aliados, sus beneficios y su ubicación en Guamúchil y el municipio de Salvador Alvarado." : business ? "El portal de aliados permitirá publicar promociones, validar tarjetas y consultar los movimientos de tu negocio." : admin ? "El acceso del equipo se habilitará junto con la apertura del programa." : "Regístrate, espera la validación del instituto y lleva tu tarjeta digital contigo."}</p>
      <div className="sa-prelaunch-note" role="status"><span className="sa-status-dot" /><div><strong>Estamos preparando la apertura.</strong><p>Los registros y accesos aún no están disponibles. Esta presentación no recopila datos personales.</p></div></div>
      <Link href="/#como-funciona" className="sa-btn sa-btn-primary">Conoce cómo funciona <span>↗</span></Link>
      <a href={MUNICIPIO.sitioOficial} className="sa-text-link" target="_blank" rel="noopener noreferrer">Visitar el sitio del Ayuntamiento ↗</a>
    </section><CardSample /></div>
  </main>;
}
