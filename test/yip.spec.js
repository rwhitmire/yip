describe("yip", function() {

	beforeEach(function() {
		yip.clear();
	});

	describe("on/trigger", function() {
	  	it("should trigger event", function() {
	  		var called = false;

	  	  	yip.on('myEvent', function() {
	  	  		called = true;
	  	  	});

	  	  	yip.trigger('myEvent');

	  	  	expect(called).toEqual(true);
	  	});

	  	it("should only trigger called event", function() {
	  		var resultA = false;
	  		var resultB = false;

	  	  	yip.on('eventA', function(){
	  	  		resultA = true;
	  	  	});

	  	  	yip.on('eventB', function(){
	  	  		resultB = true;
	  	  	});

	  	  	yip.trigger('eventA');

	  	  	expect(resultA).toEqual(true);
	  	  	expect(resultB).toEqual(false);
	  	});

	  	it("should handle a parameter", function() {
	  		var result = 0;

	  	  	yip.on('myEvent', function(param) {
	  	  		result = param;
	  	  	});

	  	  	yip.trigger('myEvent', 1);

	  	  	expect(result).toEqual(1);
	  	});

	  	it("should handle multiple parameters", function() {
	  		var a, b, c;

	  	  	yip.on('myEvent', function(_a, _b, _c) {
	  	  		a = _a;
	  	  		b = _b;
	  	  		c = _c;
	  	  	});

	  	  	yip.trigger('myEvent', 1, 2, 3);

	  	  	expect(a).toEqual(1);
	  	  	expect(b).toEqual(2);
	  	  	expect(c).toEqual(3);
	  	});

	  	it("should handle namespace", function() {
	  	  	var called = false;

	  	  	yip.on('ns.doSomething', function() {
	  	  		called = true;
	  	  	});

	  	  	yip.trigger('ns');

	  	  	expect(called).toEqual(true);
	  	});

	  	it("should not match non namespaced events", function() {
	  	  	var called = false;

	  	  	yip.on('doSomething', function() {
	  	  		called = true;
	  	  	});

	  	  	yip.trigger('do');

	  	  	expect(called).toEqual(false);
	  	});

	  	it("should handle multiple namespaces", function() {
	  	  	var called = false;

	  	  	yip.on('ns.something.doSomething', function() {
	  	  		called = true;
	  	  	});

	  	  	yip.trigger('ns.something');

	  	  	expect(called).toEqual(true);
	  	});
	});

  	describe("clear", function() {
  	  	it("should clear all events", function() {
	  		var called = false;

	  	  	yip.on('myEvent', function() {
	  	  		called = true;
	  	  	});

	  	  	yip.clear();
	  	  	yip.trigger('myEvent');

	  	  	expect(called).toEqual(false);
  	  	});

  	  	it('should clear specific event', function() {
  	  		var event1result = false;
  	  		var event2result = false;

  	  		yip.on('event1', function() {
  				event1result = true;
  	  		});

  	  		yip.on('event2', function() {
  				event2result = true;
  	  		});

  	  		yip.clear('event1');
  	  		yip.trigger('event1');
  	  		yip.trigger('event2');

  	  		expect(event1result).toEqual(false);
  	  		expect(event2result).toEqual(true);
  	  	});

  	  	it("should clear namespaced events", function() {
  	  		var event1result = false;
  	  		var event2result = false;

  	  		yip.on('e.event1', function() {
  				event1result = true;
  	  		});

  	  		yip.on('e.event2', function() {
  				event2result = true;
  	  		});

  	  		yip.clear('e');
  	  		yip.trigger('e');

  	  		expect(event1result).toEqual(false);
  	  		expect(event2result).toEqual(false);
  	  	});
  	});
});