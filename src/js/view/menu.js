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
						if(viewmodel.page !== 0){
							controller.navigation.gotoOverview();
						}
						viewmodel.search = e.target.value;
						controller.find(viewmodel.search);
					}
				}),
				m(".header-right",[
					m("span",{
						onclick: function(){
							viewmodel.menu = 1;
						}
					},viewmodel.language),
					m("span",{
						onclick: function(){
							viewmodel.menu = 2;
						}
					},"Menu"),
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
				] : [],
				(viewmodel.menu === 2) ? [
					m(".popup-back",{
						onclick: function(){
							viewmodel.menu = 0;
						}
					}),
					m(".language-picker",{},[
						m("div", m("span.details-language",{
							onclick: function(){
								viewmodel.menu = 0;
								controller.newIdeogram(function(id){
									controller.navigation.gotoIdeogramDetails(id);
								});
							}
						},"+ New Ideogram")),
						m("div", m("span.details-language",{
							onclick: function(){
								viewmodel.menu = 0;
								controller.navigation.gotoAboutPage();
							}
						},"About Ideolang")),
					]),
				] : []
			]);
		}
	};
};
