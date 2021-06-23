
function changeText(){
    // document.getElementById('test').innerHTML = "test";

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4){
            let serverResponse
            if (xmlHttp.status == 200){
                serverResponse = xmlHttp.responseText;
            } else {
                serverResponse = "ERROR";
            }
            alert(serverResponse);
            document.body.firstChild.nextSibling.innerHTML = serverResponse;
        }
    }
    xmlHttp.open("GET", "datei.txt", true);
    xmlHttp.send(null);

}