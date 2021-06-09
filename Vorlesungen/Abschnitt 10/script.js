window.onload = start;

let anzeige = "";

function start() {

    durchlauf(document.body);

    let tree = document.createElement("p");
	tree.innerHTML = anzeige;
	document.body.appendChild(tree);
}

function durchlauf(currNode) {
    dataOutput(currNode);

    let childList = currNode.childNodes;
    for (let child of childList){
        console.log(child);
        durchlauf(child);
    }
}

function dataOutput(currNode) {
    anzeige += "Type: " + convertTypeToString(currNode.nodeType) + " Name: " + currNode.nodeName + " Value: " + currNode.nodeValue + "<br/>";

    if(currNode.hasAttributes){
        for (let attribute of currNode.attributes)
            anzeige += attribute.nodeName + " " + attribute.value + "<br/>";
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