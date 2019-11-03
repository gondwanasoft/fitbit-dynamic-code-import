import document from "document";
import {waitForMemory, mem} from "./mem-wait";

document.getElementById("js1-button").addEventListener("click", js1ClickHandler);
document.getElementById("js2-button").addEventListener("click", js2ClickHandler);
document.getElementById("js3-button").addEventListener("click", js3ClickHandler);

mem('Starting');

function js1ClickHandler() {
  importCode( ()=>import("./js1") );  // name of .js file (without extension) must be hard-coded; ie, not a variable
}

function js2ClickHandler() {
  importCode( ()=>import("./js2") );
}

function js3ClickHandler() {
  importCode( ()=>import("./js3") );
}

function importCode(importer) {
  // Imports the specified .js file, then calls importedFunction(), which must be exported from that file.
  // importer: something like ()=>import("./js3")
  importer()
    .then(({importedFunction}) => {
      //console.log(`importCode(): after import, which returned a ${typeof(importedFunction)}`);
      mem('importCode(): after import,');
      importedFunction();
      mem('importCode(): after running importedFunction(),');
    })
    .catch((e) => {
      console.error(`importCode(): catch(${e})`);
    });
}