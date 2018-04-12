var NewMeaning = function(){
	var state = false;
	var value = "";
	return {
		view: function(vnode){
			return m(".details-newelement",state ?
				m("input.details-newelement-input",{
					value: value,
					onblur: function(){
						state = false;
					},
					oncreate: function(e){
						e.dom.focus();
					},
					placeholder: vnode.attrs.placeholder,
					oninput: function(e){
						value = e.target.value;
					},
					onkeypress: function(e){
						if(e.keyCode === 13) {
							vnode.attrs.onnew(value);
							value = "";
							state = false;
						}
					}
				})
				:
				m(".details-newelement-create",{
					onclick: function(){
						state = true;
					}
				},vnode.attrs.message)
			);
		}
	};
};
