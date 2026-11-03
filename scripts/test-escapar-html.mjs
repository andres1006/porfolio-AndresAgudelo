import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// La función es pura: se evalúa desde el código para no depender de un compilador en la prueba.
const codigo = readFileSync(new URL("../lib/escapar-html.ts", import.meta.url), "utf8")
  .replace(": Record<string, string>", "")
  .replace("export function escaparHtml(texto: string): string", "function escaparHtml(texto)");
const escaparHtml = new Function(`${codigo}; return escaparHtml;`)();

assert.equal(escaparHtml(`<img src=x onerror="a()">&'`), "&lt;img src=x onerror=&quot;a()&quot;&gt;&amp;&#39;");
assert.equal(escaparHtml("Hola"), "Hola");
console.log("ok: escapar html");
