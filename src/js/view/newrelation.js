var NewRelation = function(){
	var state = false;
	var value = "";
	return {
		view: function(vnode){
			return m(".details-newelement",state ? [
				m("input.details-newelement-input",{
					value: value,
					autofocus: true,
					oncreate: function(e){
						e.dom.focus();
					},
					placeholder: vnode.attrs.placeholder,
					oninput: function(e){
						value = e.target.value;
						controller.find(value);
					},
					onkeypress: function(e){
						if(e.keyCode === 13) {
							value = "";
							state = false;
						}
					}
				}),
				m(".details.newelement-autocomplete",viewmodel.searchresults.map(function(other){
					var gram = controller.getIdeogram(other);
					return m(".details-newelement-el",{
						onclick: function(){
							vnode.attrs.onnew(other);
							state = false;
							value = "";
						}
					},[
						m(Ideogram,{gram: gram, size: 70}),
						gram.meaning[viewmodel.language] ? m(".details-related-meaning", gram.meaning[viewmodel.language][0]) : []
					]);
				}))
			] : m(".details-newelement-create",{
					onclick: function(){
						state = true;
					}
				},vnode.attrs.message)
			);
		}
	};
};
