var App = function(){
	return {
		view: function(vnode){
			return m(".article", [
				m("h1", "Ideolang"),
				m("div", "A collaborative, evolving, ideographic language."),
				m("div", "There have been many attempts at creating universal languages before, most of these have been created by a single author. Rather than trying to design an isolated and complex lingua franca, Ideolang is much more like a pidgin language: a grammatically simplified means of communication that develops between groups that do not have a language in common."),
				m("div", "Real languages emerge from interactions between it's users. The words we choose to create reflect what is important in the situation it is used. The world has become increasingly complex and interconnected, but our languages have remained largely separated. Dispite the fact that most of our problems now transgress the boundries of culture or language."),
				m("div", "Ideolang is an attempt to create a global worldview.")
			]);
		}
	};
};

m.route(document.body, "/", {
	"/": App,
});
