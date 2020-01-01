'use strict';  

import { BallparksDB } from './ballparksDB.js'
import * as dbt from './dbTools.js'

console.log(`cli main.js`)

const ndb = dbt.normalize(BallparksDB)
console.dir(ndb)


