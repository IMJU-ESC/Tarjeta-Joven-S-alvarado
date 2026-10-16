import { readFileSync, writeFileSync } from 'node:fs';
let html = readFileSync('.next/server/app/index.html','utf8');
const styles = [...html.matchAll(/<link[^>]+href="(\/_next\/static\/[^\"]+\.css)"[^>]*>/g)].map(m => readFileSync('.next'+m[1].replace('/_next',''),'utf8')).join('\n');
html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<link\b[^>]*>/gi,'');
html = html.replace('</head>',`<style>${styles}</style></head>`);
for (const [name,type] of [['imju-salvador-alvarado.jpg','image/jpeg'],['identidad-salvador-alvarado.png','image/png'],['guamuchil.jpg','image/jpeg']]) {
  html=html.replaceAll('/'+name, `data:${type};base64,${readFileSync('public/'+name).toString('base64')}`);
}
html=html.replace('<body>','<body id="inicio">');
html=html.replace('</body>',`<dialog id="preview-dialog" style="border:1px solid #ddd2c6;border-radius:16px;max-width:440px;padding:30px;font-family:system-ui;background:#f5f3ed;color:#30101e"><strong style="font-size:22px" id="preview-title"></strong><p style="font-size:14px;line-height:1.8" id="preview-message"></p><form method="dialog"><button style="border:0;border-radius:7px;background:#85033e;color:white;padding:12px 25px;font-weight:700;cursor:pointer">Entendido</button></form></dialog><script>
const messages={
 '/login':['Tu tarjeta, próximamente.','Esta es una vista de presentación. El registro se habilitará al abrir el programa. No introduzcas datos personales en esta vista.'],
 '/login-negocio':['Una comunidad de aliados.','El portal permitirá solicitar la incorporación del negocio, publicar beneficios y validar tarjetas cuando abra el programa.'],
 '/directorio':['Descubre tus próximos aliados.','El directorio mostrará únicamente a los negocios que se incorporen y sean aprobados en Salvador Alvarado. Todavía no hay negocios publicados.'],
 '/tarjeta':['Tus oportunidades, en un solo lugar.','Las promociones, vacantes y tu QR personal estarán disponibles después de la aprobación de tu registro. El QR de esta presentación no tiene validez.'],
 '/administracion':['Acceso del equipo.','El panel administrativo se habilitará para el equipo autorizado al iniciar operaciones.'],
 '/aviso-de-privacidad':['Privacidad y condiciones.','La presentación no recopila datos personales. El proyecto incluye el aviso completo para Salvador Alvarado; sus datos de atención y contenido deben validarse antes de abrir registros.']
};
document.addEventListener('click',event=>{
 const link=event.target.closest('a');if(!link)return;
 const href=link.getAttribute('href');
 if(href==='/'){event.preventDefault();document.getElementById('inicio').scrollIntoView({behavior:'smooth'});return;}
 if(messages[href]){event.preventDefault();document.getElementById('preview-title').textContent=messages[href][0];document.getElementById('preview-message').textContent=messages[href][1];document.getElementById('preview-dialog').showModal();}
});
document.getElementById('preview-dialog').addEventListener('click',e=>{if(e.target.id==='preview-dialog')e.target.close();});
</script></body>`);
writeFileSync('Vista-previa-Salvador-Alvarado.html',html);
console.log('Vista de presentación autocontenida exportada.');
