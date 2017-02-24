import ProcessData from "../modules/ProcessData";

class GetData {
    constructor() {
        this.get();
    }

    get() {
        // console.log("getData.get()");
        var ourRequest = new XMLHttpRequest();
        // var dataUrl = 'https://gist.githubusercontent.com/heklaweb/16fd7c7bdc427c4bd8ca0877057559d7/raw/1b3784616845184107b304c4ce535ed322e84ee8/data.json'
        var dataUrl = 'https://raw.githubusercontent.com/heklaweb/esm/master/app/assets/data/data.json'
        ourRequest.open('GET', dataUrl);
        ourRequest.onload = function () {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                var ourData = JSON.parse(ourRequest.responseText);
                console.log('Die Daten wurden erfolgreich geladen ...');
                new ProcessData().renderData(ourData);
            } else {
                console.log("We connected to the server, but it returned an error.");
            }

        };

        ourRequest.onerror = function () {
            console.log("Connection error");
        };

        ourRequest.send();
    }

}

export default GetData;
