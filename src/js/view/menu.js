var Menu = function(){
	return {
		view: function(vnode){
			return m("header", [
				m("h1", {
					onclick: function(){
						controller.navigation.gotoOverview();
					}
				},"Ideolang"),
				m("input.header-search", {
					placeholder: "search",
					value: viewmodel.search,
					oninput: function(e){
						if(viewmodel.page === 1){
							viewmodel.page = 0;
						}
						viewmodel.search = e.target.value;
						controller.find(viewmodel.search);
					}
				}),
				m(".header-right",[
					m("span",{
						onclick: function(){
							controller.newIdeogram(function(id){
								controller.navigation.gotoIdeogramDetails(id);
							});
						}
					},"+ New"),
					m("span",{
						onclick: function(){
							viewmodel.menu = 1;
						}
					},viewmodel.language),
				]),
				(viewmodel.menu === 1) ? [
					m(".popup-back",{
						onclick: function(){
							viewmodel.menu = 0;
						}
					}),
					m(".language-picker",{},model.languages.map(function(l){
						return m("div", m("span.details-language",{
							class: (l === viewmodel.language ? "details-language-current" : ""),
							onclick: function(){
								viewmodel.language = l;
								viewmodel.menu = 0;
							}
						}, l));
					})),
				] : []
			]);
		}
	};
};
