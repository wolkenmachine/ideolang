window.addEventListener('load', function(){
    control.init();
    canvas.init();
    toolbar.init();

    var word = window.location.href.split("/").pop();
    talk.getModelData(word);

    document.getElementById("name").innerHTML = word;
}, false);
