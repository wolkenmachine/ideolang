var EditorMenu = function(){
	return {
		view: function(vnode){
            var gram = controller.getIdeogram(viewmodel.focus);
			return m("header", [
				m("img.header-left",{
					src: "/buttons/close.png",
					onclick: function(){
						controller.design.popNewDesign();
						controller.navigation.gotoIdeogramDetails(viewmodel.focus);
					}
				}),
				m("h1", gram.meaning[viewmodel.language][0]),
				m(".header-right",{
					onclick: function(){
						controller.newDesign(gram.ideogram[0]);
						controller.navigation.gotoIdeogramDetails(viewmodel.focus);
					}
				},"save")
			]);
		}
	};
};
