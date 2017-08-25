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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var falze = require("./falze.support.js");
//: @end-client







//: @client:

describe("falze", function () {

	describe("`falze( NaN )`", function () {
		it("should be equal to true", function () {
			assert.equal(falze(NaN), true);
		});
	});

	describe("`falze( null )`", function () {
		it("should be equal to true", function () {
			assert.equal(falze(null), true);
		});
	});

	describe("`falze( undefined )`", function () {
		it("should be equal to true", function () {
			assert.equal(falze(undefined), true);
		});
	});

	describe("`falze( )`", function () {
		it("should be equal to true", function () {
			assert.equal(falze(), true);
		});
	});

	describe("`falze( '' )`", function () {
		it("should be equal to true", function () {
			assert.equal(falze(""), true);
		});
	});

	describe("`falze( { } )`", function () {
		it("should be equal to true", function () {
			assert.equal(falze({}), true);
		});
	});

	describe("`falze( [ ] )`", function () {
		it("should be equal to true", function () {
			assert.equal(falze([]), true);
		});
	});

	describe("`falze with instance of class named 'ClassA'`", function () {
		it("should be equal to true", function () {var

			ClassA = function () {
				function ClassA() {(0, _classCallCheck3.default)(this, ClassA);}(0, _createClass3.default)(ClassA, [{ key: "method", value: function method()
					{return "hello";} }]);return ClassA;}();


			var testA = new ClassA();

			assert.equal(falze(testA), true);

		});
	});

	describe("`falze( 'hello' )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze("hello"), false);
		});
	});

	describe("`falze( { 'name': 'simple' } )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze({ "name": "simple" }), false);
		});
	});

	describe("`falze( [ 1, 2, 3 ] )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze([1, 2, 3]), false);
		});
	});

	describe("`falze( 0 )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze(0), false);
		});
	});

	describe("`falze( Symbol.for( 'hello' ) )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze((0, _for2.default)("hello")), false);
		});
	});

	describe("`falze( Error )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze(Error), false);
		});
	});

	describe("`falze( function hello( ){ } )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze(function hello() {}), false);
		});
	});

	describe("`falze( Infinity )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze(Infinity), false);
		});
	});

	describe("`falze( ( ) => { } )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze(function () {}), false);
		});
	});

	describe("`falze( ( entity ) => ( typeof entity == 'string' ) )`", function () {
		it("should be equal to false", function () {
			assert.equal(falze(function (entity) {return typeof entity == "string";}), false);
		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZmFsemUiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJOYU4iLCJ1bmRlZmluZWQiLCJDbGFzc0EiLCJ0ZXN0QSIsIkVycm9yIiwiaGVsbG8iLCJJbmZpbml0eSIsImVudGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxvQkFBVCxDQUFkO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsT0FBVixFQUFtQixZQUFPOztBQUV6QkEsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ2xDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBT0ksR0FBUCxDQUFkLEVBQTRCLElBQTVCO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFILFVBQVUsaUJBQVYsRUFBNkIsWUFBTztBQUNuQ0MsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sSUFBUCxDQUFkLEVBQTZCLElBQTdCO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsc0JBQVYsRUFBa0MsWUFBTztBQUN4Q0MsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE1BQU9LLFNBQVAsQ0FBZCxFQUFrQyxJQUFsQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSixVQUFVLFlBQVYsRUFBd0IsWUFBTztBQUM5QkMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE9BQWQsRUFBd0IsSUFBeEI7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxlQUFWLEVBQTJCLFlB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LENBQUcsQ0FBakIsQ0FBZCxFQUFtQyxLQUFuQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHdEQUFWLEVBQW9FLFlBQU87QUFDMUVDLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLFVBQUVXLE1BQUYsVUFBZ0IsT0FBT0EsTUFBUCxJQUFpQixRQUFqQyxFQUFQLENBQWQsRUFBb0UsS0FBcEU7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQSxDQXZIRDs7QUF5SEEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZmFsemUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2ZhbHplLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJmYWx6ZVwiOiBcImZhbHplXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBmYWx6ZSA9IHJlcXVpcmUoIFwiLi9mYWx6ZS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwiZmFsemVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIE5hTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZhbHplKCBOYU4gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSggbnVsbCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZhbHplKCBudWxsICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZhbHplKCB1bmRlZmluZWQgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmYWx6ZSggKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSggJycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmYWx6ZSggXCJcIiApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHplKCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmYWx6ZSggeyB9ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIFsgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZhbHplKCBbIF0gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSB3aXRoIGluc3RhbmNlIG9mIGNsYXNzIG5hbWVkICdDbGFzc0EnYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGNsYXNzIENsYXNzQXtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0bWV0aG9kKCApeyByZXR1cm4gXCJoZWxsb1wiOyB9XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZmFsemUoIHRlc3RBICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSggJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmYWx6ZSggXCJoZWxsb1wiICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHplKCB7ICduYW1lJzogJ3NpbXBsZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmYWx6ZSggeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9ICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHplKCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmYWx6ZSggWyAxLCAyLCAzIF0gKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIDAgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZmFsemUoIDAgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmYWx6ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoIEVycm9yIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZhbHplKCBFcnJvciApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZmFsemUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHplKCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmYWx6ZSggSW5maW5pdHkgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoICggKSA9PiB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZmFsemUoICggKSA9PiB7IH0gKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsemUoICggZW50aXR5ICkgPT4gKCB0eXBlb2YgZW50aXR5ID09ICdzdHJpbmcnICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZmFsemUoICggZW50aXR5ICkgPT4gKCB0eXBlb2YgZW50aXR5ID09IFwic3RyaW5nXCIgKSApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
