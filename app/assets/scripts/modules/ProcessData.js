// import $ from 'jquery';
/*
class ProcessData {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default ProcessData;
*/

var technikerContainer = document.getElementById("techniker");
var level1Container = document.getElementById("level1");
var level2Container = document.getElementById("level2");

var ourRequest = new XMLHttpRequest();
var dataUrl = 'https://gist.githubusercontent.com/heklaweb/16fd7c7bdc427c4bd8ca0877057559d7/raw/1b3784616845184107b304c4ce535ed322e84ee8/data.json'
ourRequest.open('GET', dataUrl);
ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    } else {
        console.log("We connected to the server, but it returned an error.");
    }

};

ourRequest.onerror = function () {
    console.log("Connection error");
};

ourRequest.send();


function renderHTML(data) {
    var htmlString = "";

    for (var i = 0; i < data.length; i++) {
        var kategorie = data[i].kategorie;
        var classname = data[i].class;
        var subclass = '';
        var id = data[i].id;
        var name = data[i].name;
        var vorname = data[i].vorname;
        var bemerkung = data[i].bemerkung;

        if (classname) {
            if (classname.length > 0) {
                subclass += ' ' + classname;
            }
        } else {
            switch (kategorie) {
                case 'TE':
                    subclass = ' Urlaub-krank';
                    break;
                case 'L1':
                    subclass = ' L1';
                    break;
                case 'L2':
                    subclass = ' L2';
                    break;
            }
        }

        htmlString += '<div class="box' + subclass + '">' +
            '<h4>' + id + '</h4>' +
            '<p>' +
            // name + ' ' + vorname + '<br>' +
            bemerkung +
            '</p>';

        htmlString += '</div>';

        switch (kategorie) {
            case 'TE':
                technikerContainer.insertAdjacentHTML('beforeend', htmlString);
                break;
            case 'L1':
                level1Container.insertAdjacentHTML('beforeend', htmlString);
                break;
            case 'L2':
                level2Container.insertAdjacentHTML('beforeend', htmlString);
                break;
            default:
                console.log("Kategorie ist nicht definiert: " + kategorie);
        }
        htmlString = "";

    }



}