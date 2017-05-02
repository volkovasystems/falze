"use strict";

const assert = require( "assert" );
const falze = require( "./falze.js" );

assert.equal( falze( { } ), true, "should be true" );
assert.equal( falze( [ ] ), true, "should be true" );
assert.equal( falze( { "name": "simple" } ), false, "should be false" );
assert.equal( falze( [ 1, 2, 3 ] ), false, "should be false" );

console.log( "ok" );
