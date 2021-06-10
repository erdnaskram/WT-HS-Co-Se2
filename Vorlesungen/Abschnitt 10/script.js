window.onload = start;

let anzeige = "";

function start() {

    durchlauf(document.body, 0);

    let tree = document.createElement("p");
	tree.innerHTML = anzeige;
	document.body.appendChild(tree);
}

function durchlauf(currNode, depth) {
    if (!is_ignorable(currNode)){
        dataOutput(currNode, depth);
        depth += 4;
    }

    let childList = currNode.childNodes;
    for (let child of childList){
        console.log(child);
        durchlauf(child, depth);
    }
}

function dataOutput(currNode, depth) {
    // Orginalpfeil: "&#9492;&#9472"
    let spaces = "";
    while(depth > 0){
        spaces += "&nbsp;"
        depth--;
    }

    if (convertTypeToString(currNode.nodeType) == "Element_Node"){
        anzeige += spaces + "↳" + currNode.nodeName + " (" + convertTypeToString(currNode.nodeType) + "): " + currNode.nodeValue + "<br>";
    } else if (convertTypeToString(currNode.nodeType) == "Text_Node"){
        anzeige += spaces + "↳#text (" + convertTypeToString(currNode.nodeType) + "): " + currNode.nodeValue + "<br/>";
    }

    depth += 4;
    while(depth > 0){
        spaces += "&nbsp;"
        depth--;
    }

    if(currNode.hasAttributes){
        for (let attribute of currNode.attributes)
            anzeige += spaces + "↳Attr "+attribute.nodeName + " = " + attribute.value + "<br>";
    }
}

function convertTypeToString(type){
    switch(type)
    {
        case 1:
            return "Element_Node";
        case 2:
            return "Attribute_Node";
        case 3:
            return "Text_Node";
    }
}

function is_all_ws(nod){
    // Use ECMA-262 Edition 3 String and RegExp features
    return !(/[^\t\n\r ]/.test(nod.textContent));
}

function is_ignorable(nod){
    return (nod.nodeType == 8) || // Kommentar-Knoten
    (nod.nodeName == "SCRIPT") || // Skript-Knoten
    (nod.nodeName == "BODY") || // BODY-Knoten
    ((nod.nodeType == 3) && is_all_ws(nod)); // Text-Knoten, alles ws
}










// function init() {
//     let h = document.body.childElementCount;
//     let tree;


//     let val = document.body.firstChild.nodeValue;
//     //if (val.){
//     //    val = "null";
//     //}

//     tree = "Type:" + document.body.firstChild.nodeType + " name:"+ document.body.firstChild.nodeName + " value:" + val +
//     "anderes:";

//     let Body = document.body;
//     let o1 = document.body.firstChild;

//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);
//     o1 = o1.nextSibling;
//     console.log(o1.nodeName);


//     console.log(Body.firstChild.nextSibling.nodeName);

//     let neuerAbsatz = document.createElement("p");
//     neuerAbsatz.innerHTML = tree;
//     document.body.appendChild(neuerAbsatz);
// }