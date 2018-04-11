var App = function(){
	return {
		view: function(vnode){
			return [
				m(Menu),
				m(".app",{},[
					viewmodel.page === 0 ? m(Overview) : [],
					viewmodel.page === 1 ? m(Details) : [],
				])
			];
		}
	};
};

m.route(document.body, "/", {
	"/": App,
});

controller.loadOverview();
