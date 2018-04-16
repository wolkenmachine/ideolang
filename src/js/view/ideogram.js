var Ideogram = function(){
	return {
		view: function(vnode){
			var gram = vnode.attrs.gram.ideogram[0];
            var size = vnode.attrs.size || 200;

            var grid = 12;
            var edgeoffset = 2;
            var factor = (1/(grid+edgeoffset*2))*size;

            var gridarray = Array.from({length: -1+grid+edgeoffset*2}, (x,i) => i+1-edgeoffset);

			//translate coordinate systems
            function translate(p){
                return (p+edgeoffset)*factor;
            }

            function untranslate(p){
                return (p/factor)-edgeoffset;
            }

            function snap(p){
                return Math.floor(p);
            }

			function getpoint(line, seg, p){

				return translate(gram.points[line[seg]][p]);
			}

			return m(".ideogram", {
				class: "size-"+size,
			},[
				m("svg", {
					width: size,
					height: size,
				}, [
                    gram.lines.map((line)=>{
    					if(line.length === 2){
    						return m(IdeogramLine,{
                                points: [
                                    getpoint(line, 0, 0), getpoint(line, 0, 1),
        							getpoint(line, 1, 0), getpoint(line, 1, 1),
                                ]
    						});
    					} else if(line.length === 4){
    						return m(IdeogramCurve,{
                                points: [
                                    getpoint(line, 0, 0), getpoint(line, 0, 1),
        							getpoint(line, 1, 0), getpoint(line, 1, 1),
                                    getpoint(line, 2, 0), getpoint(line, 2, 1),
                                    getpoint(line, 3, 0), getpoint(line, 3, 1),
                                ]
    						});
    					}
	                })
                ]),
			]);
		}
	};
};

var IdeogramLine = function(){
	return {
		view: function(vnode){
            var line = vnode.attrs.points;
			return m("line.ideogram-line",{
				x1: line[0],  y1: line[1],
				x2: line[2], y2: line[3]
			});

		}
	};
};

var IdeogramCurve = function(){
	return {
		view: function(vnode){
            var line = vnode.attrs.points;
            return m("path.ideogram-line",{
                d: "M"+line[0]+" "+ line[1]+
                   "C"+line[2]+" "+ line[3]+","+
                       line[4]+" "+ line[5]+","+
                       line[6]+" "+ line[7]
            });
		}
	};
};
