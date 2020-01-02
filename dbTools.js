'use strict';

// turn bp db into array of name, park objects
const normalize = db => db.map( p => p.parks.map( k => ({n:p.name, p:k}) ) ).flat()

// count num people who went to each park; return as array of park: count
const parkCounter = (c,i) => (c[i.p] = c[i.p] ? c[i.p]+1 : 1, c)
const countp = (ndb) => ndb.reduce( parkCounter, {} )

// filter an object's k:v pairs into array of k that satisfy f (return something or null; which are removed)
const oFilter = (o, f) => Object.keys(o).map( k => f(o,k) ).filter(x=>x)

export { normalize, countp, oFilter }
