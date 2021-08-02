
function changeText(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200){

            let purchaseOrder = JSON.parse(request.responseText);

            for (let i = 0; i< purchaseOrder.length; i  ++){
                let p = document.createElement("p");
                        let textNode = document.createTextNode("Bestellung Nr. " +purchaseOrder[i].PurchaseOrderNumber+" vom "+purchaseOrder[i].OrderDate);
                        p.appendChild(textNode);
                        document.body.children[0].appendChild(p);
            }
        }
    }
    request.open("GET", "Purchase.JSON", true);
    request.send(null);
}