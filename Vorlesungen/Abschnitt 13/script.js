
function changeText(){
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4){
            let serverResponse
            if (xmlHttp.status == 200){
                serverResponse = xmlHttp.responseXML;
            } else {
                serverResponse = "ERROR";
            }
            // alert(serverResponse);
            // document.body.firstChild.nextSibling.innerHTML = serverResponse;

            let startKnoten= serverResponse.children[0];
            let kinder = startKnoten.children;
            for (let i = 0; i< kinder.length; i  ++){
                let bestellNr= kinder[i].attributes[0].nodeValue;
                let bestellDat= kinder[i].attributes[1].nodeValue;
                // alert("Bestellung NR: " + bestellNr + " vom " + bestellDat);
                document.body.firstChild.nextSibling.innerHTML += "<br>Bestellung NR: " + bestellNr + " vom " + bestellDat;
            }
        }
    }
    xmlHttp.open("GET", "PurchaseOrders.XML", true);
    xmlHttp.send(null);
}