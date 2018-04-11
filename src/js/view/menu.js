var Menu = function(){
	return {
		view: function(vnode){
			return m("header", [
				m("h1", {
					onclick: function(){
						controller.navigation.gotoOverview();
					}
				},"Ideolang"),
				m(".header-right",viewmodel.language)
			]);
		}
	};
};
