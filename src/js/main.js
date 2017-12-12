var App = function(){
	return {
		view: function(vnode){
			return m("div", [
				m("h1", "Ideolang"),
				m("div", "A collaborative ideographic language"),
				m("div", "Currently in development")
			]);
		}
	};
};

m.route(document.body, "/", {
	"/": App,
});
