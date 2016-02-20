var model = (function(){

    var points = [];
    var lines = [];

    var update = function(){};

    function addPoint(p){
        points.push(p);
        return points.length-1;
    }

    function updatePoint(i, p){
        points[i] = p;
        update();
    }

    function selectPoint(p){
        for(var i=0; i < points.length; i++){

            if (points[i][0] == p[0] && points[i][1] == p[1]){
                return i;
            }
        }
        return undefined;
    }

    function removePoint(p){
        points.splice(p,1); //remove point

        //remove lines that contain point & update line references
        var newlines = [];
        for(var i=0; i<lines.length; i++){

            var n = lines[i];

            if(n[0] != p && n[1] != p){
                if(n[0]>p){
                    n[0]--;
                }
                if(n[1]>p){
                    n[1]--;
                }
                newlines.push(n);
            }
        }
        lines = newlines;
        update();
    }

    function addLine(l){
        lines.push(l);
        update();
    }

    function removeDoubles() {
        for(var i=0; i<points.length; i++) {
            for(var j=0; j<points.length; j++) {
                if(i != j) {
                    if(points[i][0] == points[j][0] && points[i][1] == points[j][1]) {

                        //replace
                        for(var k in lines){
                            if(lines[k][0] == i){
                                lines[k][0] = j;
                            }
                            if(lines[k][1] == i){
                                lines[k][1] = j;
                            }
                        }
                        removePoint(i);
                    }
                }
            }
        }
    }

    function eachLine(callback){
        for(var i in lines){
            callback(points[lines[i][0]], points[lines[i][1]]);
        }
    }

    function eachPoint(callback){
        for(var i in points){
            callback(points[i]);
        }
    }

    function onUpdate(callback){
        update = callback;
    }

    function getModel(){
        return {points: points, lines: lines};
    }

    function setModel(m){
        points = m.points;
        lines = m.lines;
        update();
    }


    return {
        addPoint: addPoint,
        updatePoint: updatePoint,
        selectPoint: selectPoint,
        removePoint: removePoint,
        addLine: addLine,
        eachLine: eachLine,
        eachPoint: eachPoint,
        onUpdate: onUpdate,
        removeDoubles: removeDoubles,

        getModel: getModel,
        setModel: setModel
    };

})();
