'use strict';  

import { getBallparksDB } from './ballparksDB.js'
import * as dbt from './dbTools.js'

console.log(`cli main.js`)

const BallparksDB = getBallparksDB()
const ndb = dbt.normalize(BallparksDB)
console.dir(ndb)

const ndbp = dbt.countp(ndb)
console.dir(ndbp)

const visitedBy4 = (o,p) => o[p]==4 ? p : null
const bparksVisitedByAll = dbt.oFilter( ndbp, visitedBy4 )
console.dir(bparksVisitedByAll)

