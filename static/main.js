var Ideolang = (function(){

    var list = m.prop();
    var filterdList = m.prop();

    m.request({method: "GET", url: "/characters"}).then(list).then(filterdList);

    function searchList(search){
        filterdList(list().filter(function(v){
            return (v.name.indexOf(search)>-1);
        }));
    }

    function getList(){
        return filterdList;
    }

    return {
        getList: getList,
        searchList: searchList
    };
})();



var App = {
    controller: function(){
        this.search = function(e){
            Ideolang.searchList(e.target.value);
        };
    },
    view: function(ctrl){
        return m("div",[
            m("header", [
                m("h1", "ideolang"),
                m("p", "A collaborative ideographic language"),
                m("input", {onkeyup: ctrl.search.bind(ctrl), id: "search", type: "text", placeholder: "search character"})
            ]),
            m("div", {class:"section", id:"characters"}, m.component(Overview)),
            m("div", {id: "footer"}, "goodby!")
        ]);
    }
};

var Overview = {
    controller: function(){
        var characters = Ideolang.getList();
        return {
			characters: characters
        };
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
};

m.mount(document.getElementById("content"), App);
