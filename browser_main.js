// is strict via browser <script>

import { BallparksDB } from "./ballparksDB.js"
import * as dbt from './dbTools.js'

const ndb = dbt.normalize(BallparksDB)
const ndbp = dbt.countp(ndb)
const visited4 = dbt.oFilter( ndbp, (o,p) => o[p]==4 ? p : null )

const pEls = ndb.map( o => ({el:document.getElementById(o.p),n:o.n}) ).filter(pel=>pel.el)
pEls.forEach( pel => {
      pel.el.innerHTML += `<span class='${pel.n}'> ${pel.n} </span>`
})

const v4Els = visited4.map( p => document.getElementById(p) ).filter(x=>x)
v4Els.forEach( el => el.classList.add("allFamily") )

