controller.navigation = {
    gotoOverview: function(id){
        viewmodel.page = 0;
    },
    gotoIdeogramDetails: function(id){
        viewmodel.focus = id;
        viewmodel.page = 1;
    }
};
