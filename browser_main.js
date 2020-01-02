// is strict via browser <script>

import { getBallparksDB } from "./ballparksDB.js"
import * as dbt from './dbTools.js'

const BallparksDB = getBallparksDB()
const ndb = dbt.normalize(BallparksDB)
const ndbp = dbt.countp(ndb)
const visitedBy4 = (o,p) => o[p]==4 ? p : null
const bparksVisitedByAll = dbt.oFilter( ndbp, visitedBy4 )

const pEls = ndb.map( o => ({el:document.getElementById(o.p),n:o.n}) ).filter(pel=>pel.el)
pEls.forEach( pel => {
      pel.el.innerHTML += `<span class='${pel.n}'> ${pel.n} </span>`
})

const v4Els = bparksVisitedByAll.map( p => document.getElementById(p) ).filter(x=>x)
v4Els.forEach( el => el.classList.add("allFamily") )

