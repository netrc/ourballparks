'use strict';

const normalize = db => db.map( p => p.parks.map( k => ({n:p.name, p:k}) ) ).flat()

export { normalize }