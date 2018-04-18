var Details = function(){
	return {
		view: function(vnode){
            var gram = controller.getIdeogram(viewmodel.focus);
			return 	(gram.loading) ? m(Loading) : m(".details", [
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
						m(".details-edit",{
							class: (gram.ideogram[0].points.length === 0) ? "empty" : "",
							onclick: function(){
								controller.design.pushNewDesign();
								controller.navigation.gotoIdeogramEditor(viewmodel.focus);
							}
						},[
							m("img",{src: "/buttons/drawButton.png"}),
							m(Ideogram,{gram: gram, size: 300}),
						]),
						m(".details-meanings", [
							gram.meaning[viewmodel.language] ? [
								gram.meaning[viewmodel.language].map(function(e, count){
									return m(Meaning, {
										meaning: e,
										onnew: function(e){
											controller.updateMeaning(e, count);
										}
									});
									//return m(".details-meaning", [
									//	e,
									//	m("span.downvote",{},"")
									//]);
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
							return (gram.loading) ? m(Loading) : m(".details-related-el",{
									onclick: function(){
										controller.navigation.gotoIdeogramDetails(other);
									}
								},[
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
				])
            ]);
		}
	};
};
