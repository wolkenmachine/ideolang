var Editor = function(){
	return {
		view: function(vnode){
            var gram = controller.getIdeogram(viewmodel.focus);
			return m(".editor", [
				m(".editor-buttons",[
					m(Button,{type: "move"}),
					m(Button,{type: "draw"}),
					m(Button,{type: "delete"}),
				]),
                m(IdeogramEdit, {gram: gram})
            ]);
		}
	};
};

var Button = function(){
	return {
		view: function(vnode){
			return m("img.button",{
				class: (viewmodel.tool === vnode.attrs.type) ? "selected" : "",
				src: "/buttons/"+vnode.attrs.type+"Button.png",
				onclick: function(){
					viewmodel.tool = vnode.attrs.type;
				}
			});
		}
	};
};
