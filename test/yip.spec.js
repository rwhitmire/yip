describe("yip", function() {

	beforeEach(function() {
		yip.clear();
	});

  	it("should trigger event", function() {
  		var called = false;

  	  	yip.on('myEvent', function() {
  	  		called = true;
  	  	});

  	  	yip.trigger('myEvent');

  	  	expect(called).toEqual(true);
  	});

  	it("should handle a parameter", function() {
  		var result = 0;

  	  	yip.on('myEvent', function(param) {
  	  		result = param;
  	  	});

  	  	yip.trigger('myEvent', 1);

  	  	expect(result).toEqual(1);
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
  	});
});