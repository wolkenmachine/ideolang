var App = function(){
	return {
		view: function(vnode){
			return [
				viewmodel.page < 2 ? m(Menu) : m(EditorMenu),
				m(".app",{},[
					viewmodel.page === 0 ? m(Overview) : [],
					viewmodel.page === 1 ? m(Details) : [],
					viewmodel.page === 2 ? m(Editor) : [],
				])
			];
		}
	};
};

m.route(document.body, "/", {
	"/": App,
});

controller.loadOverview();
