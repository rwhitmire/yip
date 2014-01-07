(function() {

	var events = [];

	window.yip = {

		on: function(name, action) {
			var event = {
				name: name,
				action: action
			};

			events.push(event);
		},

		trigger: function(name) {
			events.forEach(function(event){
				event.action();
			});
		}
	};
}());
