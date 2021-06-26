

function expand(sec, cont){
    // Kompetenzen expansion
    var se = document.getElementById(sec);
    var co = document.getElementById(cont);

    if (co.style.display !== "block") {
        //SET
        resetAll();
        co.style.display = "block";
        se.style.backgroundColor = "#999";
        se.firstChild.nextSibling.style.color = "#033e84";
    } else {
        // RESET
        co.style.display = "none";
        se.style.backgroundColor = '#444';
        se.firstChild.nextSibling.style.color = "#fff";
    }
}

function resetAll(){
    // RESET all Containers
    var con = document.getElementsByClassName("content");
    var ski = document.getElementsByClassName("skill");

    for (let index = 0; index < con.length; index++) {
        const el1 = con[index];
        const el2 = ski[index];
        el1.style.display = "none";
        el2.style.backgroundColor = '#444';
        el2.firstChild.nextSibling.style.color = "#fff";
    }
}