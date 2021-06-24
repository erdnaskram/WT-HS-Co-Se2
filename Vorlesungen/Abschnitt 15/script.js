
function changeText(){
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4){
            let serverResponse
            if (xmlHttp.status == 200){
                serverResponse = responseText;
            } else {
                serverResponse = "ERROR";
            }
            // alert(serverResponse);
            // document.body.firstChild.nextSibling.innerHTML = serverResponse;

            let purchaseOrder = JSON.parse(xmlHttp.responseText);

            for (let i = 0; i< purchaseOrder.length; i  ++){
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