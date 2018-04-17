var API_ENDPOINT = "/api/";

var controller = {
    find: function(value){
        m.request({
            method: "POST",
            url: API_ENDPOINT+"find",
            data: {
                language: viewmodel.language,
                query: value
            }
        }).then(function(data){
            viewmodel.searchresults = data;
        });
    },
    newDesign: function(value){
        var id = viewmodel.focus;
        m.request({
            method: "POST",
            url: API_ENDPOINT+"design/"+id,
            data: value
        }).then(function(data){
            model.ideograms[id] = data;
            model.ideograms[id].id = id;
        });
    },
    newMeaning: function(value){
        var id = viewmodel.focus;
        m.request({
            method: "POST",
            url: API_ENDPOINT+"meaning/"+id,
            data: {
                language: viewmodel.language,
                value: value
            }
        }).then(function(data){
            model.ideograms[id] = data;
            model.ideograms[id].id = id;
        });
    },
    newRelation: function(value){
        console.log(value);
        var id = viewmodel.focus;
        m.request({
            method: "POST",
            url: API_ENDPOINT+"related/"+id,
            data: {
                related: value
            }
        }).then(function(data){
            model.ideograms[id] = data.a;
            model.ideograms[id].id = id;
            model.ideograms[value] = data.b;
            model.ideograms[value].id = value;
        });
    },
    newIdeogram: function(callback){
        m.request({
            method: "GET",
            url: API_ENDPOINT+"new",
        }).then(function(data){
            callback(data.id);
        });
    },

    loadOverview: function(){
        m.request({
            method: "GET",
            url: API_ENDPOINT+"latest",
        }).then(function(data){
            viewmodel.overview = data;
        });
    },
    getIdeogram: function(id){
        if(model.ideograms[id] === undefined){
            model.ideograms[id] = {loading: true};
            m.request({
                method: "GET",
                url: API_ENDPOINT+"get/"+id,
            }).then(function(data){
                model.ideograms[id] = data;
                model.ideograms[id].id = id;
            });
        }
        return model.ideograms[id];
    }
};
