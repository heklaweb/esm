import $ from 'jquery';
import SetContentHeight from "./modules/SetContentHeight";
import ProcessData from "./modules/ProcessData";
import GetData from "./modules/GetData";
import Modal from "./modules/Modal";
// import Login from "./modules/Login";
// import AddLegende from "./modules/AddLegende";

// var getData = new GetData();
var modal = new Modal();

var btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", function() {
	// console.log("Anmeldung wird geprüft ...");
	// In Zukunft hier zunächst Authentifizierung und Authorisierung durchführen
	// Wenn diese erfolgreich sind, Daten laden und anzeigen
	// console.log("Anmeldung war erfolgreich ...");
	new GetData().get();
});