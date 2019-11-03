//console.log(`js2.js is executing`);

export function importedFunction() {
  console.log(`js2.js importedFunction() is executing`);
  console.log(`${0}`);
  let bloat = new ArrayBuffer(40000);
  console.log(`${1}`);
  console.log(`js2.js importedFunction(): bloat.length = ${bloat.byteLength}`);
}