function draghandler(ondrag, onrelease){
    console.log("down");
    function drag(e){
        console.log("move");
        if(ondrag) ondrag(e);
        m.redraw();
    }

    function release(e){
        console.log("release");
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", release);
        if(onrelease) onrelease(e);
    }

    document.addEventListener("mousemove", drag, false);
    document.addEventListener("mouseup", release, false);
}


function touchdraghandler(ondrag, onrelease){
    console.log("down");
    function drag(e){
        console.log("move");
        if(ondrag) ondrag(e);
        m.redraw();
    }

    function release(e){
        console.log("release");
        document.removeEventListener("touchmove", drag);
        document.removeEventListener("touchend", release);
        if(onrelease) onrelease(e);
    }

    document.addEventListener("touchmove", drag, false);
    document.addEventListener("touchend", release, false);
}
