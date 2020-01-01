
// is strict via browser <script>

import { BallparksDB } from "./ballparksDB.js"
import * as dbt from './dbTools.js'

const ndb = dbt.normalize(BallparksDB)


let el, allBallparks={};
BallparksDB.forEach( p => {
    console.log(`doing ${p.name}`);
    p.parks.forEach( t => {
        t in allBallparks ? allBallparks[t] += 1 :  allBallparks[t] = 1;  // keep track of all Parks
        if (el = document.getElementById(t)) {
            el.innerHTML += `<span class="${p.name}"> ${p.name} </span>`
        }
    })
});
for (let b in allBallparks) {
    if (allBallparks[b] == 4) {
    if (el = document.getElementById(b)) {
        el.classList.add("allFamily");
    }
    }
}
