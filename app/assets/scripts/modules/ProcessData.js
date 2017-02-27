// import $ from 'jquery';

class ProcessData {
    constructor() {}

    renderData(data) {
        // In Zukunft kann hierfür evtl. "Handlebars.js" verwendet werden!
        console.log('... und werden nun verarbeitet ...');
        var legendeDaten = document.getElementById("data-legende");
        var technikerDaten = document.getElementById("data-techniker");
        var level1Daten = document.getElementById("data-level1");
        var level2Daten = document.getElementById("data-level2");
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
                    case 'LE':
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
                '<p>'
                // + name + ' ' + vorname + '<br>'
                +
                bemerkung +
                '</p>';

            htmlString += '</div>';

            switch (kategorie) {
                case 'TE':
                    technikerDaten.insertAdjacentHTML('beforeend', htmlString);
                    break;
                case 'L1':
                    level1Daten.insertAdjacentHTML('beforeend', htmlString);
                    break;
                case 'L2':
                    level2Daten.insertAdjacentHTML('beforeend', htmlString);
                    break;
                case 'LE':
                    legendeDaten.insertAdjacentHTML('beforeend', htmlString);
                    break;
                default:
                    console.log("Kategorie ist nicht definiert: " + kategorie);
            }
            htmlString = "";

        }

        var container = document.getElementsByClassName("container");
        // console.log("container: " + container.length);
        setTimeout(function(){/* Look mah! No name! */}, 1000);
        for (var i = 0; i < container.length; i++) {
            // console.log("container: " + i + container[i] + ": " + container[i].className);
            container[i].classList.toggle("visible");
            // console.log("container" + i + ".classList: " + container[i].classList);
        }

        var container = document.getElementById("login");
        // console.log("container" + i + ".classList: " + container.classList);
        container.classList.add("invisible");
        // console.log("container" + i + ".classList: " + container.classList);
    }
}

export default ProcessData;