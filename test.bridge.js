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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("falze", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`falze( NaN )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze(NaN);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`falze( null )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze(null);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`falze( undefined )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze(undefined);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`falze( )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze();
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`falze( '' )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze("");
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`falze( { } )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze({});
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`falze( [ ] )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze([]);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`falze with instance of class named 'ClassA'`", function () {
		it("should be equal to true", function () {
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

			assert.equal(result, true);

		});
	});

	describe("`falze( 'hello' )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze("hello");
			}).

			value;

			assert.equal(result, false);

		});
	});

	describe("`falze( { 'name': 'simple' } )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze({ "name": "simple" });
			}).

			value;

			assert.equal(result, false);

		});
	});

	describe("`falze( [ 1, 2, 3 ] )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze([1, 2, 3]);
			}).

			value;

			assert.equal(result, false);

		});
	});

	describe("`falze( 0 )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze(0);
			}).

			value;

			assert.equal(result, false);

		});
	});

	describe("`falze( Symbol.for( 'hello' ) )`", function () {
		it("should be equal to false", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return falze( Symbol.for( "hello" ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, false);

		});
	});

	describe("`falze( Error )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze(Error);
			}).

			value;

			assert.equal(result, false);

		});
	});

	describe("`falze( function hello( ){ } )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze(function hello() {});
			}).

			value;

			assert.equal(result, false);

		});
	});

	describe("`falze( Infinity )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return falze(Infinity);
			}).

			value;

			assert.equal(result, false);

		});
	});

	describe("`falze( ( ) => { } )`", function () {
		it("should be equal to false", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return falze( ( ) => { } );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, false);

		});
	});

	describe("`falze( ( entity ) => ( typeof entity == 'string' ) )`", function () {
		it("should be equal to false", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return falze( ( entity ) => ( typeof entity == "string" ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, false);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImZhbHplIiwiTmFOIiwidmFsdWUiLCJlcXVhbCIsInVuZGVmaW5lZCIsIkVycm9yIiwiaGVsbG8iLCJJbmZpbml0eSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENJLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBT0MsR0FBUCxDQUFQO0FBQ0EsSUFKVzs7QUFNWEMsUUFORjs7QUFRQWQsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBWkQ7QUFhQSxFQWREOztBQWdCQUwsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU8sSUFBUCxDQUFQO0FBQ0EsSUFKVzs7QUFNWEUsUUFORjs7QUFRQWQsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBWkQ7QUFhQSxFQWREOztBQWdCQUwsVUFBVSxzQkFBVixFQUFrQyxZQUFPO0FBQ3hDSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU9JLFNBQVAsQ0FBUDtBQUNBLElBSlc7O0FBTVhGLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkFMLFVBQVUsWUFBVixFQUF3QixZQUFPO0FBQzlCSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE9BQVA7QUFDQSxJQUpXOztBQU1YRSxRQU5GOztBQVFBZCxVQUFPZSxLQUFQLENBQWNQLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FaRDtBQWFBLEVBZEQ7O0FBZ0JBTCxVQUFVLGVBQVYsRUFBMkIsWUFBTztBQUNqQ0ksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxNQUFPLEVBQVAsQ0FBUDtBQUNBLElBSlc7O0FBTVhFLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkFMLFVBQVUsZ0JBQVYsRUFBNEIsWUFBTztBQUNsQ0ksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxNQUFPLEVBQVAsQ0FBUDtBQUNBLElBSlc7O0FBTVhFLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkFMLFVBQVUsZ0JBQVYsRUFBNEIsWUFBTztBQUNsQ0ksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxNQUFPLEVBQVAsQ0FBUDtBQUNBLElBSlc7O0FBTVhFLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkFMLFVBQVUsK0NBQVYsRUFBMkQsWUFBTztBQUNqRUksS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFFR1AsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBeEJEO0FBeUJBLEVBMUJEOztBQTRCQUwsVUFBVSxvQkFBVixFQUFnQyxZQUFPO0FBQ3RDSSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU8sT0FBUCxDQUFQO0FBQ0EsSUFKVzs7QUFNWEUsUUFORjs7QUFRQWQsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLEtBQXRCOztBQUVBLEdBWkQ7QUFhQSxFQWREOztBQWdCQUwsVUFBVSxpQ0FBVixFQUE2QyxZQUFPO0FBQ25ESSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU8sRUFBRSxRQUFRLFFBQVYsRUFBUCxDQUFQO0FBQ0EsSUFKVzs7QUFNWEUsUUFORjs7QUFRQWQsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLEtBQXRCOztBQUVBLEdBWkQ7QUFhQSxFQWREOztBQWdCQUwsVUFBVSx3QkFBVixFQUFvQyxZQUFPO0FBQzFDSSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU8sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBUCxDQUFQO0FBQ0EsSUFKVzs7QUFNWEUsUUFORjs7QUFRQWQsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLEtBQXRCOztBQUVBLEdBWkQ7QUFhQSxFQWREOztBQWdCQUwsVUFBVSxjQUFWLEVBQTBCLFlBQU87QUFDaENJLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBTyxDQUFQLENBQVA7QUFDQSxJQUpXOztBQU1YRSxRQU5GOztBQVFBZCxVQUFPZSxLQUFQLENBQWNQLE1BQWQsRUFBc0IsS0FBdEI7O0FBRUEsR0FaRDtBQWFBLEVBZEQ7O0FBZ0JBTCxVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERJLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPZSxLQUFQLENBQWNQLE1BQWQsRUFBc0IsS0FBdEI7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOztBQWtCQUwsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDSSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU9LLEtBQVAsQ0FBUDtBQUNBLElBSlc7O0FBTVhILFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixLQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkFMLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREksS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxNQUFPLFNBQVNNLEtBQVQsR0FBaUIsQ0FBRyxDQUEzQixDQUFQO0FBQ0EsSUFKVzs7QUFNWEosUUFORjs7QUFRQWQsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLEtBQXRCOztBQUVBLEdBWkQ7QUFhQSxFQWREOztBQWdCQUwsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDSSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU9PLFFBQVAsQ0FBUDtBQUNBLElBSlc7O0FBTVhMLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixLQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkFMLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0ksS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixLQUF0Qjs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7O0FBa0JBTCxVQUFVLHdEQUFWLEVBQW9FLFlBQU87QUFDMUVJLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPZSxLQUFQLENBQWNQLE1BQWQsRUFBc0IsS0FBdEI7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOztBQWtCQSxDQXRURDs7QUF3VEEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImZhbHplXCIsXG5cdFx0XHRcInBhdGhcIjogXCJmYWx6ZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZmFsemUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImZhbHplXCI6IFwiZmFsemVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJmYWx6ZVwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIE5hTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoIE5hTiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHplKCBudWxsICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSggdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBmYWx6ZSggdW5kZWZpbmVkICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoICcnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBmYWx6ZSggXCJcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoIHsgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIFsgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoIFsgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUgd2l0aCBpbnN0YW5jZSBvZiBjbGFzcyBuYW1lZCAnQ2xhc3NBJ2BcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0Y2xhc3MgQ2xhc3NBe1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0XHRcdG1ldGhvZCggKXsgcmV0dXJuIFwiaGVsbG9cIjsgfVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoIHRlc3RBICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHplKCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoIFwiaGVsbG9cIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHplKCB7ICduYW1lJzogJ3NpbXBsZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHplKCB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSggWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBmYWx6ZSggWyAxLCAyLCAzIF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSggMCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHplKCAwICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBmYWx6ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIEVycm9yIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoIEVycm9yICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIEluZmluaXR5IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoIEluZmluaXR5ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoICggKSA9PiB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoICggKSA9PiB7IH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoICggZW50aXR5ICkgPT4gKCB0eXBlb2YgZW50aXR5ID09ICdzdHJpbmcnICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsemUoICggZW50aXR5ICkgPT4gKCB0eXBlb2YgZW50aXR5ID09IFwic3RyaW5nXCIgKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
