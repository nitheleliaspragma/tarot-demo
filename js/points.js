/**
 * points.js — Gestión del saldo de puntos (persiste en localStorage)
 */

const STORAGE_KEY = 'tarot_points';
const INITIAL_POINTS = 50;

/** Precios por estructura (las sub-fases de ciclo_mujer heredan el precio base) */
const PRECIOS = {
  ciclo_mujer: 10,
  amor:        5,
  tiempo:      2,
};

export function getPoints() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === null) {
    localStorage.setItem(STORAGE_KEY, String(INITIAL_POINTS));
    return INITIAL_POINTS;
  }
  return parseInt(stored, 10);
}

export function spendPoints(amount) {
  const current = getPoints();
  if (current < amount) return false;
  localStorage.setItem(STORAGE_KEY, String(current - amount));
  return true;
}

/** Devuelve el precio en puntos de una estructura (sub-fases de ciclo usan precio ciclo_mujer) */
export function getPrecio(estructuraId) {
  if (estructuraId.startsWith('ciclo_mujer')) return PRECIOS.ciclo_mujer;
  return PRECIOS[estructuraId] ?? 0;
}
