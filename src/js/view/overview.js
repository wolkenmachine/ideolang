var Overview = function(){
	return {
		view: function(vnode){
			return m(".overview", [
				viewmodel.overview.map((e)=>{
					var gram = controller.getIdeogram(e);
					if(!gram.loading){
						return m(".overview-el",{
							onclick: function(){
								controller.navigation.gotoIdeogramDetails(gram.id);
							}
						},[
							m(Ideogram,{gram: gram})
						]);
					}
					return "loading";
				})
			]);
		}
	};
};
