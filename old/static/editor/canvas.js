var canvas = (function(){

    var ctx;
    var canvas;

    function init(){
        var content = document.getElementById("content");
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', 260);
        canvas.setAttribute('height', 260);
        content.appendChild(canvas);

        ctx = canvas.getContext("2d");
        ctx.translate(0.5,0.5);

        draw();

        model.onUpdate(draw);
    }

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
        drawLines();
        drawWidgets();
    }

    function drawLines(){
        model.eachLine(function(a,b){
            var s = 20;
            //lines
            ctx.lineWidth= s*0.75;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'black';

            ctx.beginPath();
                ctx.moveTo(a[0]*s+10, a[1]*s+10);
                ctx.lineTo(b[0]*s+10, b[1]*s+10);

            ctx.stroke();
        });
    }

    function drawWidgets(){
        model.eachPoint(function(a){
            var s = 20;
            //lines
            ctx.lineWidth= 1;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'red';

            ctx.beginPath();
                ctx.rect(a[0]*s+10-2, a[1]*s+10-2,4,4);
            ctx.stroke();

        });
    }

    function drawGrid(){
        var s = 20;
        //lines
        ctx.lineWidth=0.5;
        ctx.strokeStyle = 'black';
        //grid
        for(var x=0; x<=12; x++){
            ctx.beginPath();
            ctx.moveTo(x *s+10, 0 *s);
            ctx.lineTo(x *s+10, 12*s+20);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0 *s, x *s+10);
            ctx.lineTo(12*s+20, x*s+10);
            ctx.stroke();
        }
    }

    return {
        init: init
    };

})();
