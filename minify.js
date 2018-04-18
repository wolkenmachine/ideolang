var compressor = require('node-minify');

// Using UglifyJS
compressor.minify({
    compressor: 'gcc',
    input: [
        "./src/js/controller/overview.js",
        "./src/js/controller/navigation.js",
        "./src/js/controller/design.js",
        "./src/js/controller/draghandler.js",
        "./src/js/model/model.js",
        "./src/js/model/viewmodel.js",
        "./src/js/view/editor.js",
        "./src/js/view/loading.js",
        "./src/js/view/about.js",
        "./src/js/view/meaning.js",
        "./src/js/view/newmeaning.js",
        "./src/js/view/newrelation.js",
        "./src/js/view/overview.js",
        "./src/js/view/details.js",
        "./src/js/view/ideogramedit.js",
        "./src/js/view/ideogram.js",
        "./src/js/view/editormenu.js",
        "./src/js/view/menu.js",
        "./src/js/main.js"
    ],
    output: './src/builds/main-1.0.0.min.js',
    callback: function (err, min) {}
});
