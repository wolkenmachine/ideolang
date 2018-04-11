var Details = function(){
	return {
		view: function(vnode){
            var gram = controller.getIdeogram(viewmodel.focus);
			return m(".details", [
                m(".details-languages", model.languages.map(function(l){
                    if(gram.meaning[l]){
                        return m(".details-language-known",gram.meaning[l][0]);
                    }
                    return m(".details-language-unknown",l);
                })),
				m(".details-current",[
					(gram.loading) ? [
						"loading"
					] :[
						m(Ideogram,{gram: gram, size: 300})
					],
					m(".details-meaning", [
						m(".details-meaning-main", gram.meaning[viewmodel.language][0]),
						m(".details-meaning-new", "+ add synonym")
					]),
				])
            ]);
		}
	};
};
