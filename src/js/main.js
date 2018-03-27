var Overview = function(){
	return {
		view: function(vnode){
			return m(".overview", [
				model.ideograms.map((e)=>{
					return m(Ideogram, {gram: e});
				})
			]);
		}
	};
};

var Menu = function(){
	return {
		view: function(vnode){
			return m("header", [
				m("h1", "Ideolang")
			]);
		}
	};
};

var App = function(){
	return {
		view: function(vnode){
			return [
				m(Menu),
				m(Overview)
			];
		}
	};
};

m.route(document.body, "/", {
	"/": App,
});
