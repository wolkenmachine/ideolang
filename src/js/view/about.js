var About = function(){
	return {
		view: function(vnode){
			return m(".about", [
				m("h2", "A collaborative, evolving, ideographic language."),
				m(".about-paragraph", "The world has become increasingly complex and interconnected, yet our languages have remained largely separated."),
				m(".about-paragraph", "Ideolang is an attempt to create a universal ideographic language that is open to everyone."),
				m(".about-paragraph", "The goal is not to create the \"ultimate\" language, but rather a meta-language that exists inbetween."),
				m(".about-paragraph", "It should function much like a pidgin language: a grammatically simplified means of communication that develops between groups that do not have a language in common."),
				m(".about-paragraph", ["Ideolang is being developed as an open source project. If you are interested in helping out please contact: ",m("a", {href: "mailto:ideolang@wolkenmachine.nl"},"ideolang@wolkenmachine.nl")]),

			]);
		}
	};
};
