"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "falze",
			"path": "falze/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/falze.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"falze": "falze"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const falze = require( "./falze.js" );
//: @end-server

//: @client:
const falze = require( "./falze.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "falze", ( ) => {

	describe( "`falze( NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( NaN ), true );
		} );
	} );

	describe( "`falze( null )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( null ), true );
		} );
	} );

	describe( "`falze( undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( undefined ), true );
		} );
	} );

	describe( "`falze( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( ), true );
		} );
	} );

	describe( "`falze( '' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( "" ), true );
		} );
	} );

	describe( "`falze( { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( { } ), true );
		} );
	} );

	describe( "`falze( [ ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( [ ] ), true );
		} );
	} );

	describe( "`falze with instance of class named 'ClassA'`", ( ) => {
		it( "should be equal to true", ( ) => {

			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.equal( falze( testA ), true );

		} );
	} );

	describe( "`falze( 'hello' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( "hello" ), false );
		} );
	} );

	describe( "`falze( { 'name': 'simple' } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( { "name": "simple" } ), false );
		} );
	} );

	describe( "`falze( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( [ 1, 2, 3 ] ), false );
		} );
	} );

	describe( "`falze( 0 )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( 0 ), false );
		} );
	} );

	describe( "`falze( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( Symbol.for( "hello" ) ), false );
		} );
	} );

	describe( "`falze( Error )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( Error ), false );
		} );
	} );

	describe( "`falze( function hello( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( function hello( ){ } ), false );
		} );
	} );

	describe( "`falze( Infinity )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( Infinity ), false );
		} );
	} );

	describe( "`falze( ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( ( ) => { } ), false );
		} );
	} );

	describe( "`falze( ( entity ) => ( typeof entity == 'string' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( ( entity ) => ( typeof entity == "string" ) ), false );
		} );
	} );

} );

//: @end-server


//: @client:

describe( "falze", ( ) => {

	describe( "`falze( NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( NaN ), true );
		} );
	} );

	describe( "`falze( null )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( null ), true );
		} );
	} );

	describe( "`falze( undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( undefined ), true );
		} );
	} );

	describe( "`falze( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( ), true );
		} );
	} );

	describe( "`falze( '' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( "" ), true );
		} );
	} );

	describe( "`falze( { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( { } ), true );
		} );
	} );

	describe( "`falze( [ ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( falze( [ ] ), true );
		} );
	} );

	describe( "`falze with instance of class named 'ClassA'`", ( ) => {
		it( "should be equal to true", ( ) => {

			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.equal( falze( testA ), true );

		} );
	} );

	describe( "`falze( 'hello' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( "hello" ), false );
		} );
	} );

	describe( "`falze( { 'name': 'simple' } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( { "name": "simple" } ), false );
		} );
	} );

	describe( "`falze( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( [ 1, 2, 3 ] ), false );
		} );
	} );

	describe( "`falze( 0 )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( 0 ), false );
		} );
	} );

	describe( "`falze( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( Symbol.for( "hello" ) ), false );
		} );
	} );

	describe( "`falze( Error )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( Error ), false );
		} );
	} );

	describe( "`falze( function hello( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( function hello( ){ } ), false );
		} );
	} );

	describe( "`falze( Infinity )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( Infinity ), false );
		} );
	} );

	describe( "`falze( ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( ( ) => { } ), false );
		} );
	} );

	describe( "`falze( ( entity ) => ( typeof entity == 'string' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( falze( ( entity ) => ( typeof entity == "string" ) ), false );
		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "falze", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`falze( NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( NaN );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`falze( null )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( null );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`falze( undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( undefined );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`falze( )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`falze( '' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( "" );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`falze( { } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( { } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`falze( [ ] )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( [ ] );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`falze with instance of class named 'ClassA'`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					class ClassA{
						constructor( ){ }
						method( ){ return "hello"; }
					}

					let testA = new ClassA( );

					return falze( testA );

				}

			).value;
			//: @end-ignore

			assert.equal( result, true );

		} );
	} );

	describe( "`falze( 'hello' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( "hello" );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`falze( { 'name': 'simple' } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( { "name": "simple" } );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`falze( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( [ 1, 2, 3 ] );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`falze( 0 )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( 0 );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`falze( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( Symbol.for( "hello" ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, false );

		} );
	} );

	describe( "`falze( Error )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( Error );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`falze( function hello( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( function hello( ){ } );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`falze( Infinity )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( Infinity );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`falze( ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( ( ) => { } );
				}

			).value;
			//: @end-ignore
			assert.equal( result, false );

		} );
	} );

	describe( "`falze( ( entity ) => ( typeof entity == 'string' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return falze( ( entity ) => ( typeof entity == "string" ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, false );

		} );
	} );

} );

//: @end-bridge
