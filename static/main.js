var Ideolang = {
    list: function(){
        return m.request({method: "GET", url: "/characters"});
    }
}

var Overview = {
    controller: function(){
        var characters = Ideolang.list();
        return {
			characters: characters
        }
    },
    view: function(ctrl){
        return m("div", ctrl.characters().map(function(char){
            return m("a", {href: "/edit/"+char.name}, [
                m("div", {class: "characterBlock"} , [
                    m.component(CharacterView, char),
                    m("div", {class: "characterName"},char.name)
                ])
            ]);
        }));
    }
}

m.mount(document.getElementById("characters"), Overview);
