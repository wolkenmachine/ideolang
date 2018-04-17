controller.navigation = {
    gotoOverview: function(p){
        viewmodel.page = 0;
        viewmodel.search = "";
        controller.loadOverview();
        if(!p){window.history.pushState('overview', 'overview', '/#!/');}
    },
    gotoIdeogramDetails: function(id, p){
        viewmodel.focus = id;
        viewmodel.page = 1;
        viewmodel.search = "";
        if(!p){window.history.pushState('details', 'details', '/#!/ideogram/'+id);}
    },
    gotoIdeogramEditor: function(id){
        viewmodel.focus = id;
        viewmodel.page = 2;
    },

    gotoAboutPage: function(p){
        viewmodel.page = 3;
        if(!p){window.history.pushState('about', 'about', '/#!/about/');}
    },
    loadUrl: function(){
        var url = window.location.href.split("/#!/");
        if(url[1] !==undefined && url[1] !== ""){
            var params = url[1].split("/");
            if(params[0]==="ideogram"){
                controller.navigation.gotoIdeogramDetails(params[[1]],true);
            }
            if(params[0]==="about"){
                controller.navigation.gotoAboutPage(true);
            }
        } else {
            controller.navigation.gotoOverview(true);
        }
        m.redraw();
    }
};

window.onpopstate = function(e){

    controller.navigation.loadUrl();
};
