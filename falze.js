"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "falze",
			"path": "falze/falze.js",
			"file": "falze.js",
			"module": "falze",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/falze.git",
			"test": "falze-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check if entity is falsy or empty.
	@end-module-documentation

	@include:
		{
			"arid": "arid",
			"doubt": "doubt",
			"empt": "empt",
			"falzy": "falzy"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var arid = require( "arid" );
	var doubt = require( "doubt" );
	var empt = require( "empt" );
	var falzy = require( "falzy" );
}

if( typeof window != "undefined" &&
	!( "arid" in window ) )
{
	throw new Error( "arid is not defined" );
}

if( typeof window != "undefined" &&
	!( "doubt" in window ) )
{
	throw new Error( "doubt is not defined" );
}

if( typeof window != "undefined" &&
	!( "empt" in window ) )
{
	throw new Error( "empt is not defined" );
}

if( typeof window != "undefined" &&
	!( "falzy" in window ) )
{
	throw new Error( "falzy is not defined" );
}

var falze = function falze( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

	if( doubt( entity ).AS_ARRAY ){
		return arid( entity );
	}

	if( typeof entity == "object" ){
		return empt( entity );
	}

	return falzy( entity );
};

if( typeof module != "undefined" ){
	module.exports = falze;
}
