(function() {
	var events = [];

	function namesMatch(n1, n2) {
		return n1 == n2 || n1.indexOf(n2 + '.') == 0;
	}

	window.yip = {
		on: function(name, action) {
			var event = {
				name: name,
				action: action
			};

			events.push(event);
		},

		trigger: function(name) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			events.forEach(function(event){
				if(namesMatch(event.name, name))
					event.action.apply(null, args);
			});
		},

		clear: function(name) {
			if(!name) {
				events.length = 0;
				return;
			}

			var newEvents = [];

			events.forEach(function(event){
				if(!namesMatch(event.name, name)) newEvents.push(event);
			});

			events = newEvents;
		}
	};
}());
