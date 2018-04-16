var Details = function(){
	return {
		view: function(vnode){
            var gram = controller.getIdeogram(viewmodel.focus);
			return m(".details", [
                m(".details-languages", model.languages.map(function(l){
                    return m("div", m("span.details-language",{
						class: (gram.meaning[l] ? "details-language-known" : "details-language-unknown") + " " +
						       (l === viewmodel.language ? "details-language-current" : ""),
						onclick: function(){
							viewmodel.language = l;
						}
					}, gram.meaning[l] ? gram.meaning[l][0] : l));
                })),
				m(".details-current",[
					(gram.loading) ? m(Loading) :[
						m(".details-edit",{
							onclick: function(){
								controller.design.pushNewDesign();
								controller.navigation.gotoIdeogramEditor(viewmodel.focus);
							}
						},[
							m("img",{src: "/buttons/drawButton.png"}),
							m(Ideogram,{gram: gram, size: 300}),
						]),
						m(".details-meaning", [
							gram.meaning[viewmodel.language] ? [
								m(".details-meaning-main", gram.meaning[viewmodel.language][0]),
								gram.meaning[viewmodel.language].slice(1).map(function(e){
									return m(".details-meaning-secondary", e);
								}),
							] : [],
							m(NewMeaning, {
								id: gram.id,
								message: "+ add meaning",
								placeholder: "enter new meaning",
								onnew: controller.newMeaning
							})
						]),
						m(".details-related", gram.related.map(function(other){
							var gram = controller.getIdeogram(other);
							return m(".details-related-el",[
								m(Ideogram,{gram: gram, size: 70}),
								gram.meaning[viewmodel.language] ? m(".details-related-meaning", gram.meaning[viewmodel.language][0]) : []
							]);
						})),
						m(NewRelation, {
							id: gram.id,
							message: "+ add relation",
							placeholder: "enter new relation",
							onnew: controller.newRelation
						})
					],
				])
            ]);
		}
	};
};
