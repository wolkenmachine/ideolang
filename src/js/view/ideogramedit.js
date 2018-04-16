var IdeogramEdit = function(){
	return {
		view: function(vnode){

			var gram = vnode.attrs.gram.ideogram[0];
            var size = 400;

            var grid = 12;
            var edgeoffset = 6;
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
                return Math.round(p);
            }

			function getpoint(line, seg, p){
				return translate(gram.points[line[seg]][p]);
			}

			return m(".ideogram-editor", {
				class: "tool-"+viewmodel.tool
			},[
				m("svg", {
					width: size,
					height: size,
					onmousedown: function(e){
						if(viewmodel.tool === "draw"){
							var bb = vnode.dom.getBoundingClientRect();
							var offset = [bb.x, bb.y];
							var update = [e.clientX, e.clientY];
							var newida = controller.design.addPoint([
								snap(untranslate(update[0]-offset[0])),
								snap(untranslate(update[1]-offset[1]))
							]);

							var newidb = controller.design.addPoint([
								snap(untranslate(update[0]-offset[0])),
								snap(untranslate(update[1]-offset[1]))
							]);
							controller.design.addLine([newida, newidb]);

							draghandler(function(e){
								var bb = vnode.dom.getBoundingClientRect();
								var offset = [bb.x, bb.y];
								var update = [e.clientX, e.clientY];
								controller.design.movePoint(newidb, [
									snap(untranslate(update[0]-offset[0])),
									snap(untranslate(update[1]-offset[1]))
								]);
							});
						}
					},
					onmouseup: function(){
						controller.design.removeDoubles();
					}
				}, [
                    m("rect",{
                        x: translate(0), y: translate(0),
                        width: translate(grid-edgeoffset), height: translate(grid-edgeoffset),
                        "stroke-width": 0.5,
                        "stroke": "black",
                        "fill": "none"
                    }),
                    gridarray.map((x) => {
                        return m("line",{
                            x1: translate(x), y1: translate(-edgeoffset),
                            x2: translate(x), y2: translate(grid+edgeoffset),
                            "stroke-width": 0.1,
            				"stroke": "black",
                        });
                    }),
                    gridarray.map((x)=>{
                        return m("line",{
                            x1: translate(-edgeoffset), y1: translate(x),
                            x2: translate(grid+edgeoffset), y2: translate(x),
                            "stroke-width": 0.1,
            				"stroke": "black",
                        });
                    }),
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
	                }),
                    gram.points.map((point, count)=>{
                        return m(IdeogramPoint,{
                            point: [translate(point[0])-3, translate(point[1])-3],
                            ondrag: function(update){
								if(viewmodel.tool === "move"){
	                                var bb = vnode.dom.getBoundingClientRect();
	                                var offset = [bb.x, bb.y];
	                                controller.design.movePoint(count, [
	                                    snap(untranslate(update[0]-offset[0])),
	                                    snap(untranslate(update[1]-offset[1]))
	                                ]);
								}
                            },
							onmouseup: function(){
								if(viewmodel.tool === "delete"){
									controller.design.deletePoint(count);
								}
							}
                        });
                    })
                ]),
				m(".ideogram-word", gram.word)
			]);
		}
	};
};


var IdeogramPoint = function(){
    return {
        view: function(vnode){
            var point = vnode.attrs.point;
            return m("rect.ideogram-point",{
                x: point[0], y: point[1],
                width: 6, height: 6,

				onmouseup: function(){
					vnode.attrs.onmouseup();
				},
                onmousedown: function(e){
                    e.preventDefault();

                    draghandler(function(e){
                        vnode.attrs.ondrag([
                            e.clientX,
                            e.clientY
                        ]);
                    });
                }
            });
        }
    };
};
