var talk = (function(){

    var wordname;

    function getModelData(name){
        wordname = name;
        var xmlhttp = new XMLHttpRequest();
        var url = "/character/"+name;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if(xmlhttp.responseText){
                    var myArr = JSON.parse(xmlhttp.responseText);
                    if(myArr){
                        model.setModel(myArr);
                    }
                }
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    function saveModelData(){
        var xmlhttp = new XMLHttpRequest();
        var url = "/character/"+wordname;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if(xmlhttp.responseText){
                    if(xmlhttp.responseText==="ok!"){
                        document.location.href="/";
                    }
                }
            }
        };

        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(JSON.stringify(model.getModel()));
    }

    return {
        getModelData: getModelData,
        saveModelData: saveModelData
    };
})();
