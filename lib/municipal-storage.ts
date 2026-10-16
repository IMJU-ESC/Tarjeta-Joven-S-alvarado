const prefix = "tjsa:v1:";
export const municipalStorage = {
  getItem(key: string) {
    try { return window.localStorage.getItem(prefix + key); } catch { return null; }
  },
  setItem(key: string, value: string) {
    try { window.localStorage.setItem(prefix + key, value); } catch { /* Almacenamiento opcional. */ }
  },
  removeItem(key: string) {
    try { window.localStorage.removeItem(prefix + key); } catch { /* Almacenamiento opcional. */ }
  },
};
