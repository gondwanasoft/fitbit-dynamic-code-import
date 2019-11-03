//console.log(`js1.js is executing`);

export function importedFunction() {
  console.log(`js1.js importedFunction() is executing`);
  let bloat = new ArrayBuffer(10000);
  console.log(`js1.js importedFunction(): bloat.length = ${bloat.byteLength}`);
}