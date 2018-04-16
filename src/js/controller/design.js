controller.design = {
    pushNewDesign: function(id){
        id = id || 0;
        var gram = controller.getIdeogram(viewmodel.focus).ideogram[id];
        controller.getIdeogram(viewmodel.focus).ideogram.unshift(JSON.parse(JSON.stringify(gram)));
    },

    popNewDesign: function(){
        controller.getIdeogram(viewmodel.focus).ideogram.shift();
    },

    addPoint: function(point){
        var gram = controller.getIdeogram(viewmodel.focus).ideogram[0];
        gram.points.push(point);
        return gram.points.length-1;
    },

    movePoint: function(count, point){
        var gram = controller.getIdeogram(viewmodel.focus).ideogram[0];
        gram.points[count] = point;
    },

    deletePoint: function(count){
        var gram = controller.getIdeogram(viewmodel.focus).ideogram[0];
        gram.points.splice(count,1); //remove point

        //remove lines that contain point & update line references
        var newlines = [];
        for(var i=0; i<gram.lines.length; i++){

            var n = gram.lines[i];

            if(n[0] != count && n[1] != count){
                if(n[0]>count){
                    n[0]--;
                }
                if(n[1]>count){
                    n[1]--;
                }
                newlines.push(n);
            }
        }
        gram.lines = newlines;
    },

    addLine: function (l){
        var gram = controller.getIdeogram(viewmodel.focus).ideogram[0];
        gram.lines.push(l);
    },

    removeDoubles: function () {
        var gram = controller.getIdeogram(viewmodel.focus).ideogram[0];

        for(var i=0; i<gram.points.length; i++) {
            for(var j=0; j<gram.points.length; j++) {
                if(i != j) {
                    if(gram.points[i][0] == gram.points[j][0] && gram.points[i][1] == gram.points[j][1]) {

                        //replace
                        for(var k in gram.lines){
                            if(gram.lines[k][0] == i){
                                gram.lines[k][0] = j;
                            }
                            if(gram.lines[k][1] == i){
                                gram.lines[k][1] = j;
                            }
                        }
                        controller.design.deletePoint(i);
                    }
                }
            }
        }
    }

};
