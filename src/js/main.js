var Ideogram = function(){
	return {
		view: function(vnode){
			var gram = vnode.attrs.gram;
			var factor = (1/13)*200;
			function getpoint(line, seg, p){
				return (gram.points[line[seg]][p]+1)*factor;
			}
			return m("svg.ideogram", {
				width: 200,
				height: 200
			}, gram.lines.map((line)=>{
				return m("line",{
					x1: getpoint(line, 0, 0),  y1: getpoint(line, 0, 1),
					x2: getpoint(line, 1, 0), y2: getpoint(line, 1, 1),
					"stroke-width": 15,
					"stroke": "black",
					"stroke-linecap": "round"
				});
			}));
		}
	};
};

/*
<svg width="120" height="120" viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg">

  <line x1="20" y1="100" x2="100" y2="20"
      stroke-width="2" stroke="black"/>
</svg>
*/

var Overview = function(){
	return {
		view: function(vnode){
			return m(".overview", [
				model.ideograms.map((e)=>{
					return m(Ideogram, {gram: e});
				})
			]);
		}
	};
};

var Menu = function(){
	return {
		view: function(vnode){
			return m("header", [
				m("h1", "Ideolang")
			]);
		}
	};
};

var App = function(){
	return {
		view: function(vnode){
			return [
				m(Menu),
				m(Overview)
			];
		}
	};
};

m.route(document.body, "/", {
	"/": App,
});
