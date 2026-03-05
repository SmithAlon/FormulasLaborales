/** Currency formatter for MXN */
export const fmt = (n: number): string =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(n);

/** Format number to 2 decimal places */
export const fmtN = (n: number): string => n.toFixed(2);

/** Vacation days lookup per Art. 76 LFT (reforma 2022) */
export function getVacacionesDias(años: number): number {
  if (años <= 0) return 0;
  if (años === 1) return 12;
  if (años === 2) return 14;
  if (años === 3) return 16;
  if (años === 4) return 18;
  if (años === 5) return 20;
  if (años <= 10) return 20 + (Math.floor(años) - 5) * 2;
  if (años <= 15) return 30 + (Math.floor(años) - 10) * 2;
  return 40 + (Math.floor(años) - 15) * 2;
}

/** ISR monthly tax brackets (SAT 2024) */
export const isrTabla = [
  { li: 0.01,      ls: 746.04,    tasa: 0.0192, cf: 0.00 },
  { li: 746.05,    ls: 6332.05,   tasa: 0.0640, cf: 14.32 },
  { li: 6332.06,   ls: 11128.01,  tasa: 0.1088, cf: 371.83 },
  { li: 11128.02,  ls: 12935.82,  tasa: 0.1600, cf: 893.63 },
  { li: 12935.83,  ls: 15487.71,  tasa: 0.1792, cf: 1182.88 },
  { li: 15487.72,  ls: 31236.49,  tasa: 0.2136, cf: 1640.18 },
  { li: 31236.50,  ls: 49233.00,  tasa: 0.2352, cf: 5004.12 },
  { li: 49233.01,  ls: 93993.90,  tasa: 0.3000, cf: 9236.89 },
  { li: 93993.91,  ls: 125325.20, tasa: 0.3200, cf: 22665.17 },
  { li: 125325.21, ls: Infinity,  tasa: 0.3500, cf: 32691.18 },
];

// ── Type-safe DOM helpers ──────────────────────────────────

/** Get numeric value from an input element by ID */
export function getInputValue(id: string, fallback = 0): number {
  const el = document.getElementById(id) as HTMLInputElement | null;
  return el ? (parseFloat(el.value) || fallback) : fallback;
}

/** Get integer value from an input element by ID */
export function getInputInt(id: string, fallback = 0): number {
  const el = document.getElementById(id) as HTMLInputElement | null;
  return el ? (parseInt(el.value, 10) || fallback) : fallback;
}

/** Set value on an input element by ID */
export function setInputValue(id: string, value: string | number): void {
  const el = document.getElementById(id) as HTMLInputElement | null;
  if (el) el.value = String(value);
}

/** Set textContent on an element by ID */
export function setText(id: string, text: string): void {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/** Remove the 'hidden' class from an element by ID */
export function show(id: string): void {
  document.getElementById(id)?.classList.remove('hidden');
}
