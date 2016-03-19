var AddCharacter = {
    controller: function(){
        this.value = "";
        this.change = function(e){
            this.value = e.target.value.toLowerCase();
        };

        this.add = function(e){
            if(this.value != ""){
                window.location.assign("/edit/"+this.value);
            }

        }
    },
    view: function(ctrl){
        return m("div", {id: "footer"}, [
            m("div", "add new character:"),
            m("input", {onchange: ctrl.change.bind(ctrl), type: "text"}),
            m("button", {onclick: ctrl.add.bind(ctrl)},"Add")
        ]);
    }
};
