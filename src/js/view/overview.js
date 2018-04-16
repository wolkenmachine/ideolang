var Overview = function(){
	return {
		view: function(vnode){
			return m(".overview", [
				(viewmodel.search === "") ?
					viewmodel.overview.map((e)=>{
						var gram = controller.getIdeogram(e);
						if(!gram.loading){
							return m(".overview-el",{
								onclick: function(){
									controller.navigation.gotoIdeogramDetails(gram.id);
								}
							},[
								m(Ideogram,{size: 150, gram: gram}),
								gram.meaning[viewmodel.language] ? m(".overview-meaning", gram.meaning[viewmodel.language][0]) : []
							]);
						}
						return m(Loading);
					})
					:
					viewmodel.searchresults.map(function(e){
						var gram = controller.getIdeogram(e);
						if(!gram.loading){
							return m(".overview-el",{
								onclick: function(){
									controller.navigation.gotoIdeogramDetails(gram.id);
								}
							},[
								m(Ideogram,{size: 150, gram: gram}),
								gram.meaning[viewmodel.language] ? m(".overview-meaning", gram.meaning[viewmodel.language][0]) : []
							]);
						}
						return m(Loading);
					})
			]);
		}
	};
};
