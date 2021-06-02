
window.onload = init;

function init() {
    let h = document.body.childElementCount;
    let tree;


    let val = document.body.firstChild.nodeValue;
    //if (val.){
    //    val = "null";
    //}

    tree = "Type:" + document.body.firstChild.nodeType + " name:"+ document.body.firstChild.nodeName + " value:" + val +
    "anderes:";

    let Body = document.body;
    let o1 = document.body.firstChild;

    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);
    o1 = o1.nextSibling;
    console.log(o1.nodeName);


    console.log(Body.firstChild.nextSibling.nodeName);

    let neuerAbsatz = document.createElement("p");
    neuerAbsatz.innerHTML = tree;
    document.body.appendChild(neuerAbsatz);
}