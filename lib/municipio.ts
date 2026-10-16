export const MUNICIPIO = {
  nombre: "Salvador Alvarado",
  cabecera: "Guamúchil",
  estado: "Sinaloa",
  programa: "Tarjeta Joven Salvador Alvarado",
  instituto: "Instituto Municipal de la Juventud de Salvador Alvarado",
  centro: { lat: 25.4600, lng: -108.0797 },
  sitioOficial: "https://salvadoralvarado.gob.mx/",
  logoInstituto: "/imju-salvador-alvarado.jpg",
  identidadMunicipal: "/identidad-salvador-alvarado.png",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  contacto: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  domicilio: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Guamúchil, Salvador Alvarado, Sinaloa",
} as const;
export const PROGRAMA_ACTIVO = process.env.NEXT_PUBLIC_APP_MODE === "live";
