'use strict';

const normalize = db => db.map( p => p.parks.map( k => ({n:p.name, p:k}) ) ).flat()

const countp = (ndb) => ndb.reduce( (c,i) => {c[i.p] = c[i.p] ? c[i.p]+1 : 1; return c}, {} )

const oFilter = (o, f) => Object.keys(o).map( p => f(o,p) ).filter(x=>x)


export { normalize, countp, oFilter }
