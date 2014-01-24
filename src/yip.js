(function() {
	var events = [];

	function namesMatch(n1, n2) {
		return n1 == n2 || n1.indexOf(n2 + '.') === 0;
	}

	window.yip = {
		on: function(name, action) {
			var event = {
				name: name,
				action: action
			};

			events.push(event);

			return this;
		},

		invoke: function(name) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			for(var i = 0; i < events.length; i++){
				var event = events[i];

				if(namesMatch(event.name, name))
					event.action.apply(null, args);
			}

			return this;
		},

		clear: function(name) {
			if(!name) {
				events.length = 0;
				return;
			}

			var newEvents = [];

			for(var i = 0; i < events.length; i++){
				var event = events[i];

				if(!namesMatch(event.name, name)) newEvents.push(event);
			}

			events = newEvents;

			return this;
		}
	};
}());
