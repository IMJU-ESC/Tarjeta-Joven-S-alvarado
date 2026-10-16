import { QRCodeSVG } from "qrcode.react";
export function CardSample() {
  return <div className="sa-card-scene">
    <div className="sa-card" aria-label="Muestra de la tarjeta, sin validez">
      <div className="sa-card-top"><div><span className="sa-card-kicker">INSTITUTO MUNICIPAL DE LA JUVENTUD</span><h2>Tarjeta <em>Joven.</em></h2></div><img src="/imju-salvador-alvarado.jpg" alt="Logo oficial del IMJU" width="60" height="60" /></div>
      <div className="sa-card-destination"><span className="sa-pin" aria-hidden="true">⌖</span><div><strong>Salvador Alvarado</strong><span>Guamúchil · Sinaloa</span></div></div>
      <div className="sa-card-rule" />
      <div className="sa-card-bottom"><div><span className="sa-card-kicker">TU COMUNIDAD. TUS OPORTUNIDADES.</span><strong>Juventudes que<br />conectan.</strong><span className="sa-card-demo">TARJETA DE MUESTRA · SIN VALIDEZ</span></div><div className="sa-qr"><QRCodeSVG value="TJSA-VISTA-PREVIA-NO-VALIDA" size={76} level="M" title="QR de muestra, sin validez para canjes" /></div></div>
    </div>
    <div className="sa-floating-tag"><span aria-hidden="true">✦</span><div><strong>Hecha para ti.</strong><span>Digital. Local. Contigo.</span></div></div>
  </div>;
}
