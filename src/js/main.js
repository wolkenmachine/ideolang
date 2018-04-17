var App = function(){
	return {
		view: function(vnode){
			return [
				viewmodel.page === 2 ? m(EditorMenu) : m(Menu),
				m(".app",{},[
					viewmodel.page === 0 ? m(Overview) : [],
					viewmodel.page === 1 ? m(Details) : [],
					viewmodel.page === 2 ? m(Editor) : [],
					viewmodel.page === 3 ? m(About) : [],
				])
			];
		}
	};
};

m.mount(document.body,  App);

controller.navigation.loadUrl();
