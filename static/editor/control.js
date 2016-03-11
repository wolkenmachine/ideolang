var control = (function(){

    var content;
    var gridPos = [];
    var selectedPoint;

    var tool = 0; //0=add, 1=move, 2= delete

    function init(){
        content = document.getElementById("content");
        content.addEventListener('mousedown', mousedown, false);
        content.addEventListener('mouseup', mouseup, false);
        content.addEventListener('mousemove', mousemove, false);

        content.addEventListener('touchstart', touchstart, false);
        content.addEventListener('touchend', mouseup, false);
        content.addEventListener('touchmove', touchmove, false);

    }

    function touchstart(e){
        mousedown(e);
        //mousedown(e);
        touchmove(e);
    }

    function touchmove(e){
        var touch = e.touches[0];
        var rect = e.target.getBoundingClientRect();
        touch.offsetX = touch.pageX - rect.left;
        touch.offsetY = touch.pageY - rect.top;
        mousemove(touch);
    }

    function mousedown(e) {
        console.log("mousedown");
        //tool = (e.button == 0)? 0:1;

        if(tool===0){ //add line
            var a = model.addPoint(gridPos);
            var b = model.addPoint(gridPos);
            model.addLine([a,b]);

            selectedPoint = b;
        } else if(tool==1) { //move point
            selectedPoint = model.selectPoint(gridPos);
        } else if(tool==2) { //delete point
            selectedPoint = model.selectPoint(gridPos);
            if(selectedPoint !== undefined){
                model.removePoint(selectedPoint);
            }
        }
    }

    function mouseup() {
        console.log("mouseup");
        selectedPoint = undefined;
        model.removeDoubles();
    }

    function mousemove(e) {
        gridPos = [Math.round((e.offsetX-10)/20),Math.round((e.offsetY-10)/20)];
        if(selectedPoint !== undefined){
            model.updatePoint(selectedPoint, gridPos);
        }
    }

    function setTool(t){
        tool = t;
    }

    return {
        init: init,
        setTool: setTool
    };
})();
