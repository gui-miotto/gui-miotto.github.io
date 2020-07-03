function show_exp_popup(elmnt) {
    hide_all_popups();
    blur_exp_graph(true);

    var popup = document.getElementById(elmnt);
    popup.style.display = "block";
}

function reset_exp_graph(){
    hide_all_popups();
    blur_exp_graph(false);
}

function hide_all_popups(){
    i = 1
    while(true){
        elmt_id = "exp_popup_" + i;
        var popup = document.getElementById(elmt_id);
        if (!popup)
            break;
        popup.style.display = "none";
        i++;
    }
}

function blur_exp_graph(sel){
    var graph = document.getElementById("exp_graph");
    if (sel) {
        graph.style.opacity = "0.5";
        graph.style.filter = "blur(2px)";
    }
    else {
        graph.style.opacity = "1.0";
        graph.style.filter = "none";
    }
}
