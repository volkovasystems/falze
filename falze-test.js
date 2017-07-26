const assert = require( "assert" );
const falze = require( "./falze.js" );

assert.equal( falze( NaN ), true, "should be equal to true" );

assert.equal( falze( null ), true, "should be equal to true" );

assert.equal( falze( undefined ), true, "should be equal to true" );

assert.equal( falze( ), true, "should be equal to true" );

assert.equal( falze( "" ), true, "should be equal to true" );

assert.equal( falze( { } ), true, "should be equal to true" );

assert.equal( falze( [ ] ), true, "should be equal to true" );

class ClassA{
	constructor( ){ }
	method( ){ return "hello"; }
}

let testA = new ClassA( );
assert.equal( falze( testA ), true, "should return true" );


assert.equal( falze( "hello" ), false, "should be equal to false" );

assert.equal( falze( { "name": "simple" } ), false, "should be equal to false" );

assert.equal( falze( [ 1, 2, 3 ] ), false, "should be equal to false" );

assert.equal( falze( 0 ), false, "should be equal to false" );

assert.equal( falze( Symbol.for( "hello" ) ), false, "should return false" );

assert.equal( falze( Error ), false, "should return false" );

assert.equal( falze( function hello( ){ } ), false, "should be equal to false" );

assert.equal( falze( Infinity ), false, "should be equal to false" );

assert.equal( falze( ( ) => { } ), false, "should return false" );

assert.equal( falze( ( ( ) => arguments )( ) ), false, "should return false" );

assert.equal( falze( ( entity ) => ( typeof entity == "string" ) ), false, "should return false" );

console.log( "ok" );
