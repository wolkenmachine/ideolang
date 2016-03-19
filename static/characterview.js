var CharacterView = {
    view: function(ctrl, char){
        this.draw = function(canvas){
            canvas.setAttribute('width', 80);
            canvas.setAttribute('height', 80);

            var ctx = canvas.getContext("2d");
            ctx.translate(0.5,0.5);

            //lines
            var s = 5;
            ctx.lineWidth= s*0.75;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#333333';

            var points = char.value.points;
            var lines = char.value.lines;

            for(var j in lines){
                var line = lines[j];
                //console.log(line);
                var a = [points[line[0]][0], points[line[0]][1]];
                var b = [points[line[1]][0], points[line[1]][1]];


                ctx.beginPath();
                    ctx.moveTo(a[0]*s+10, a[1]*s+10);
                    ctx.lineTo(b[0]*s+10, b[1]*s+10);
                ctx.stroke();

            }

            //draw cross
            if(lines.length===0){
                ctx.beginPath();
                    ctx.moveTo(6*s+10, 4*s+10);
                    ctx.lineTo(6*s+10, 8*s+10);
                ctx.stroke();

                ctx.beginPath();
                    ctx.moveTo(4*s+10, 6*s+10);
                    ctx.lineTo(8*s+10, 6*s+10);
                ctx.stroke();
            }

        };

        return m("canvas", {config: this.draw});
    }
};
