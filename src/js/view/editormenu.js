var EditorMenu = function(){
	return {
		view: function(vnode){
            var gram = controller.getIdeogram(viewmodel.focus);
			return m("header", [
				m(".header-left",{
					onclick: function(){
						controller.design.popNewDesign();
						controller.navigation.gotoOverview(viewmodel.focus);
					}
				},"x"),
				m("h1", gram.meaning[viewmodel.language][0]),
				m(".header-right",{
					onclick: function(){
						controller.newDesign(gram.ideogram[0]);
						controller.navigation.gotoOverview(viewmodel.focus);
					}
				},"save")
			]);
		}
	};
};
