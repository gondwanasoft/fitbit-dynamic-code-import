import {memory} from "system";

export function waitForMemory(onMemory, arg) {   // 4.8 remove if unused (and all refs)
    // TODO 0 For best effect, don't call this from within functions that use non-trivial local vars: their mem can't be freed until such functions return.
    // TODO 0 consider using this BEFORE any mem-intensive ops that can fail; eg, accessing slideList-order.csv, deleting slides, etc.
    // TODO 0 consider using this AFTER start(), etc, to clean up mem after my code
    let mem, count=0, mem0 = memory.js.total-memory.js.used;
    console.log("waitForMemory A mem="+mem0);
    let memTimer = setInterval(
        function() {
            mem = memory.js.total-memory.js.used;
            //console.log("   mem loop: memory left: "+mem);
            if (mem>7000 || mem>mem0+2000 || ++count>50000) {
                clearInterval(memTimer);
                console.log("waitForMemory Z mem="+mem);
                onMemory(arg);
            } else mem0 = mem;
        },
        1
    );
}

export function mem(s) {console.log(s+" mem used: "+memory.js.used);}  // TODO 4.8 remove (and all refs)
// TODO 4.8 remove all refs to mem-wait.js, and delete file