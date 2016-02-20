var toolbar = (function(){

    var draw, move, del, save;
    var editor;

    function init(){
        editor = document.getElementById('editor');

        draw = document.getElementById('drawButton');
        move = document.getElementById('moveButton');
        del = document.getElementById('deleteButton');
        save = document.getElementById('saveButton');

        draw.addEventListener('mousedown', drawClick, false);
        move.addEventListener('mousedown', moveClick, false);
        del.addEventListener('mousedown', deleteClick, false);
        save.addEventListener('mousedown', saveClick, false);

        set(0);
    }

    function drawClick(){
        editor.style.cursor = "url('/editor/drawButton.png'), default";
        control.setTool(0);
        set(0);
    }

    function moveClick(){
        editor.style.cursor = "url('/editor/moveButton.png'), default";
        control.setTool(1);
        set(1);
    }

    function deleteClick(){
        editor.style.cursor = "url('/editor/deleteButton.png'), default";
        control.setTool(2);
        set(2);
    }

    function saveClick(){
        talk.saveModelData();
    }

    function set(a){
        draw.style.border = (a===0)? "1px solid red":"1px solid grey";
        move.style.border = (a===1)? "1px solid red":"1px solid grey";
        del.style.border = (a===2)? "1px solid red":"1px solid grey";
    }

    return {
        init:init
    };

})();
