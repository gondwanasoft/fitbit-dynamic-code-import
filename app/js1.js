//console.log(`js1.js is executing`);

export function importedFunction() {
  let bloat = '';
  for (let i=0; i<1000; i++) bloat += '1234567890';
  console.log(`js1.js importedFunction() is executing`);
  console.log(`js1.js importedFunction(): bloat.length = ${bloat.length}`);
}