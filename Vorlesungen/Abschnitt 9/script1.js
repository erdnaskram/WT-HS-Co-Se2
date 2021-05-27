let t = document.querySelector('table');
let r = document.querySelector('tr');

ausgabeKnoten(t);
ausgabeElement(t);
ausgabeKnoten(r);
ausgabeElement(r);

function ausgabeKnoten(ref) {
  console.log("( Type: " + ref.firstChild.nodeType + " Name: " +
    ref.firstChild.nodeName + " Value: " + ref.firstChild.nodeValue + " )");
}

function ausgabeElement(ref) {
  console.log("( Type: " + ref.firstElementChild.nodeType + " Name: " + ref.firstElementChild.nodeName + " Value: " + ref.firstElementChild.nodeValue + " )");

}