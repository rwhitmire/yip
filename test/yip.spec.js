describe("yip", function() {
  	it("should trigger event", function() {
  		var called = false;

  	  	yip.on('myEvent', function() {
  	  		called = true;
  	  	});

  	  	yip.trigger('myEvent');

  	  	expect(called).toEqual(true);
  	});
});