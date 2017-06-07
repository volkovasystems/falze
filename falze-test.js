const assert = require( "assert" );
const falze = require( "./falze.js" );

assert.equal( falze( NaN ), true, "should be true" );
assert.equal( falze( null ), true, "should be true" );
assert.equal( falze( undefined ), true, "should be true" );
assert.equal( falze( ), true, "should be true" );
assert.equal( falze( "" ), true, "should be true" );
assert.equal( falze( { } ), true, "should be true" );
assert.equal( falze( [ ] ), true, "should be true" );

assert.equal( falze( "hello" ), false, "should be false" );
assert.equal( falze( 123 ), false, "should be false" );
assert.equal( falze( { "name": "simple" } ), false, "should be false" );
assert.equal( falze( [ 1, 2, 3 ] ), false, "should be false" );
assert.equal( falze( function hello( ){ } ), false, "should be false" );
assert.equal( falze( Infinity ), false, "should be false" );
assert.equal( falze( Array ), false, "should be false" );
assert.equal( falze( Object ), false, "should be false" );
assert.equal( falze( Date ), false, "should be false" );

console.log( "ok" );
