var Ideogram = function(){
	return {
		view: function(vnode){
			var gram = vnode.attrs.gram;

			//translate coordinate systems
			function getpoint(line, seg, p){
				var factor = (1/13)*200;
				return (gram.points[line[seg]][p]+1)*factor;
			}

			return m(".ideogram", [
				m("svg", {
					width: 200,
					height: 200
				}, gram.lines.map((line)=>{
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

				})),
				m(".ideogram-word", gram.word)
			]);
		}
	};
};

var IdeogramLine = function(){
	return {
		view: function(vnode){
            var line = vnode.attrs.points;
			return m("line",{
				x1: line[0],  y1: line[1],
				x2: line[2], y2: line[3],
				"stroke-width": 15,
				"stroke": "black",
				"stroke-linecap": "round"
			});

		}
	};
};

var IdeogramCurve = function(){
	return {
		view: function(vnode){
            var line = vnode.attrs.points;
            return m("path",{
                d: "M"+line[0]+" "+ line[1]+
                   "C"+line[2]+" "+ line[3]+","+
                       line[4]+" "+ line[5]+","+
                       line[6]+" "+ line[7],
                "stroke-width": 15,
                "stroke": "black",
                "stroke-linecap": "round",
                "fill": "none"
            });
		}
	};
};
