import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton =$(".modal__close");
        this.events();
    }

    events() {
        // clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));

        // clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));

        // any key pressed
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) { /* esc key pressed */
            this.closeModal();
        }
    }

    openModal() {
        console.log("openModal ...");
        this.modal.addClass("modal--is-visible");
        return false; // verhindert, dass zum Anfang der Seite gescrollt wird
    }

    closeModal() {
        console.log("closeModal ...");
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;