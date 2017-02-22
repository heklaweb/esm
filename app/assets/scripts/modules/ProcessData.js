// import $ from 'jquery';

class ProcessData {
    constructor() {}

    renderData(data) {
        // In Zukunft kann hierfür evtl. "Handlebars.js" verwendet werden!
        console.log('... und werden nun verarbeitet ...');
        var technikerContainer = document.getElementById("techniker");
        var level1Container = document.getElementById("level1");
        var level2Container = document.getElementById("level2");
        var legendeContainer = document.getElementById("legende");
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

            htmlString += '<div class="box' + subclass + '">'
                + '<h4>' + id + '</h4>'
                + '<p>'
                // + name + ' ' + vorname + '<br>'
                + bemerkung
                + '</p>';

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
                case 'LE':
                    legendeContainer.insertAdjacentHTML('beforeend', htmlString);
                    break;
                default:
                    console.log("Kategorie ist nicht definiert: " + kategorie);
            }
            htmlString = "";

        }

    }
}

export default ProcessData;