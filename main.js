'use strict';  

import { BallparksDB } from './ballparksDB.js'
import * as dbt from './dbTools.js'

console.log(`cli main.js`)

const ndb = dbt.normalize(BallparksDB)
console.dir(ndb)

const ndbp = dbt.countp(ndb)
console.dir(ndbp)

const visit4 = dbt.oFilter( ndbp, (o,p) => o[p]==4 ? p : null )
console.dir(visit4)

