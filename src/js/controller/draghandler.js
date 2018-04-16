function draghandler(ondrag, onrelease){
    function drag(e){
        if(ondrag) ondrag(e);
        m.redraw();
    }

    function release(e){
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", release);
        if(onrelease) onrelease(e);
    }

    document.addEventListener("mousemove", drag, false);
    document.addEventListener("mouseup", release, false);
}
