import Link from "next/link";
import { CardSample } from "@/components/CardSample";
import { MUNICIPIO, PROGRAMA_ACTIVO } from "@/lib/municipio";
import { LEYENDA_PROGRAMA } from "@/lib/politica-programa";
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Inicio() {
  return <div className="sa-home">
    <a href="#contenido" className="sa-skip">Saltar al contenido</a>
    <div className="sa-topline"><div>Guamúchil, Sinaloa <span>·</span> Instituto Municipal de la Juventud</div><a href={MUNICIPIO.sitioOficial} target="_blank" rel="noopener noreferrer">Ayuntamiento <Arrow /></a></div>
    <header className="sa-header">
      <Link href="/" aria-label="Tarjeta Joven Salvador Alvarado, inicio" className="sa-wordmark">tarjeta<span>joven</span><small>SALVADOR ALVARADO</small></Link>
      <nav aria-label="Navegación principal"><a href="#beneficios">Beneficios</a><a href="#como-funciona">Cómo funciona</a><Link href="/directorio">Aliados</Link></nav>
      <Link href="/login" className="sa-header-login">Mi tarjeta <Arrow /></Link>
    </header>
    <main id="contenido">
      <section className="sa-hero">
        <div className="sa-hero-copy">
          <div className="sa-eyebrow"><span className="sa-status-dot" /> TU MUNICIPIO. TU MOMENTO.</div>
          <h1>Ser joven<br />tiene sus<br /><em>beneficios.</em><span className="sa-title-star" aria-hidden="true">✳</span></h1>
          <p>Conecta con lo que te mueve. Descuentos, oportunidades y experiencias para las juventudes de <strong>Salvador Alvarado.</strong></p>
          <div className="sa-hero-actions"><Link href="/login" className="sa-btn sa-btn-primary">Quiero mi tarjeta <Arrow /></Link><Link href="/login-negocio" className="sa-btn sa-btn-outline">Quiero ser aliado <Arrow /></Link></div>
          <p className="sa-hero-fine">Gratuita · Digital · De 12 a 29 años</p>
        </div>
        <div className="sa-hero-visual"><div className="sa-hero-visual-label">CON IDENTIDAD DE AQUÍ <span>01 / SA</span></div><CardSample /><div className="sa-visual-caption"><span className="sa-tiny-star">✳</span><p>Más cerca de tu ciudad.<br /><strong>Más cerca de lo que quieres.</strong></p></div></div>
      </section>
      <section className="sa-institutional" aria-label="Instituciones responsables">
        <div className="sa-institutional-copy"><span>UN PROGRAMA PARA</span><strong>Nuestras juventudes.</strong></div>
        <div className="sa-official-logos"><img src="/identidad-salvador-alvarado.png" alt="Identidad oficial del Ayuntamiento de Salvador Alvarado y escudo municipal" width="766" height="363" /><span className="sa-logo-divider" /><img src="/imju-salvador-alvarado.jpg" alt="Logo oficial del Instituto Municipal de la Juventud" width="447" height="447" /></div>
      </section>
      <section id="beneficios" className="sa-benefits sa-section">
        <div className="sa-section-title"><div><div className="sa-eyebrow">UNA TARJETA. MÁS POSIBILIDADES.</div><h2>Lo que necesitas,<br /><em>más cerca de ti.</em></h2></div><p>El talento es tuyo.<br />Las oportunidades las conectamos.</p></div>
        <div className="sa-benefit-grid">
          <article className="sa-benefit sa-benefit-wine"><span className="sa-feature-icon" aria-hidden="true">%</span><span className="sa-index">01</span><h3>Beneficios<br />que se disfrutan.</h3><p>Descubre promociones de negocios aliados y consulta sus condiciones antes de usarlas.</p><Link href="/directorio">Explorar beneficios <Arrow /></Link></article>
          <article className="sa-benefit sa-benefit-green"><span className="sa-feature-icon" aria-hidden="true">↗</span><span className="sa-index">02</span><h3>Tu próximo<br />paso empieza aquí.</h3><p>Encuentra vacantes y oportunidades publicadas por la comunidad de negocios del municipio.</p><Link href="/tarjeta">Conocer oportunidades <Arrow /></Link></article>
          <article className="sa-benefit sa-benefit-sand"><span className="sa-feature-icon" aria-hidden="true">⌖</span><span className="sa-index">03</span><h3>Consume local.<br />Conecta más.</h3><p>Encuentra aliados en el mapa y lleva tu QR digital contigo, desde tu celular.</p><Link href="/directorio">Ver el directorio <Arrow /></Link></article>
        </div>
      </section>
      <section className="sa-place">
        <div className="sa-place-photo"><img src="/guamuchil.jpg" alt="Paisaje de la presa Eustaquio Buelna en Guamúchil" width="1200" height="800" loading="lazy" /><div><span>SALVADOR ALVARADO, SINALOA</span><strong>Aquí está<br />lo que nos une.</strong></div></div>
        <div className="sa-place-copy"><div className="sa-eyebrow">ORGULLO DE NUESTRA TIERRA</div><h2>De aquí.<br /><em>Para ti.</em></h2><p>Guamúchil, nuestras comunidades y el talento joven que mueve a Salvador Alvarado. Una tarjeta para conectar con lo que tenemos cerca y construir nuevas oportunidades.</p><a href="https://www.google.com/maps/search/?api=1&query=Guam%C3%BAchil%2C+Salvador+Alvarado%2C+Sinaloa" target="_blank" rel="noopener noreferrer" className="sa-text-link">Ubica nuestro municipio <Arrow /></a></div>
      </section>
      <section id="como-funciona" className="sa-how sa-section"><div className="sa-section-title"><div><div className="sa-eyebrow">MUY TUYA. MUY SENCILLA.</div><h2>De tu registro<br /><em>a tu primer beneficio.</em></h2></div><span className="sa-how-mark" aria-hidden="true">↗</span></div><div className="sa-steps">{[["01","Regístrate","Completa tu solicitud con tus datos y documentos. Si tienes menos de 18 años, participa tu madre, padre o tutor."],["02","Activa tu cuenta","El instituto revisa tu solicitud. Si se aprueba, recibirás un enlace para crear tu contraseña."],["03","Lleva tu QR","Entra a tu tarjeta, consulta las condiciones y presenta tu QR en los negocios aliados."]].map(([num,title,description])=><article key={num}><span>{num}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="sa-ally"><div><div className="sa-eyebrow">NEGOCIOS QUE SUMAN</div><h2>Tu negocio puede<br />ser su próximo favorito.</h2><p>Suma tu marca a la comunidad. Ofrece beneficios y conecta con las juventudes de Salvador Alvarado.</p></div><Link href="/login-negocio" className="sa-btn sa-btn-cream">Sumar mi negocio <Arrow /></Link></section>
      {!PROGRAMA_ACTIVO && <div className="sa-opening"><span className="sa-status-dot" /><p><strong>Estamos preparando la apertura.</strong> Los registros y beneficios estarán disponibles al iniciar operaciones.</p></div>}
    </main>
    <footer className="sa-footer"><div className="sa-footer-main"><div><Link href="/" className="sa-wordmark">tarjeta<span>joven</span><small>SALVADOR ALVARADO</small></Link><p>Instituto Municipal de la Juventud<br />Guamúchil, Salvador Alvarado, Sinaloa.</p></div><div className="sa-footer-links"><Link href="/aviso-de-privacidad">Privacidad y condiciones</Link><a href={MUNICIPIO.sitioOficial} target="_blank" rel="noopener noreferrer">Ayuntamiento <Arrow /></a>{MUNICIPIO.instagram && <a href={MUNICIPIO.instagram} target="_blank" rel="noopener noreferrer">Instagram <Arrow /></a>}{MUNICIPIO.facebook && <a href={MUNICIPIO.facebook} target="_blank" rel="noopener noreferrer">Facebook <Arrow /></a>}<Link href="/administracion">Acceso del equipo <Arrow /></Link></div></div><div className="sa-footer-legal"><span>© 2026 · Tarjeta Joven Salvador Alvarado</span><p>{LEYENDA_PROGRAMA}</p></div></footer>
  </div>;
}
