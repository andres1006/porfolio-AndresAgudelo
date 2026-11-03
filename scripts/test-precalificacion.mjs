import assert from "node:assert/strict";
import { OFERTAS, PREGUNTAS, recomendar, resumenRespuestas } from "../lib/precalificacion.ts";

const casos = [
  ["automatizar", "nose", "diagnostico"], ["automatizar", "menos200", "diagnostico"], ["automatizar", "200a1000", "diagnostico"],
  ["automatizar", "1000a3000", "quickwin"], ["automatizar", "3000a15000", "sistema"], ["automatizar", "mas15000", "sistema"],
  ["construir", "nose", "diagnostico"], ["construir", "1000a3000", "diagnostico"], ["construir", "3000a15000", "agente"], ["construir", "mas15000", "mvp"],
  ["consultoria", "nose", "diagnostico"], ["consultoria", "menos200", "diagnostico"], ["consultoria", "200a1000", "revision"], ["consultoria", "1000a3000", "revision"], ["consultoria", "3000a15000", "acompanamiento"],
  ["diagnostico", "mas15000", "diagnostico"],
];
for (const [icp, inv, esperado] of casos) assert.equal(recomendar(icp, inv), esperado, `${icp}/${inv}`);
for (const icp of ["automatizar", "construir", "consultoria", "diagnostico"]) {
  for (const inv of ["nose", "menos200", "200a1000", "1000a3000", "3000a15000", "mas15000"]) assert.ok(OFERTAS[recomendar(icp, inv)]);
}
assert.equal(PREGUNTAS.length, 5);
assert.match(resumenRespuestas({ situacion: "construir", inversion: "nose" }), /Quiero construir.*\n.*Aún no lo sé/);
console.log("ok: precalificación");
