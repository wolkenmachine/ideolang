var API_ENDPOINT = "http://localhost:3000/";

var controller = {
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
