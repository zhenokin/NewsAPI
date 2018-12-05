'use strict';



class ErrorPopup {
    constructor() {
        if (ErrorPopup.instance) return ErrorPopup.instance;
        ErrorPopup.instance = this;

        this.errorPopup = document.getElementById('error_popup');
        this.createPopup();
    }

    createPopup() {
        const errorContainer = document.getElementById('error_popup');
        const errorButtonDismiss = this.createDismissButton();
        this.errorStatus = this.createField('Status');
        this.errorCode = this.createField('Code');
        this.errorMessage = this.createField('Message');

        errorContainer.appendChild(this.errorStatus);
        errorContainer.appendChild(this.errorCode);
        errorContainer.appendChild(this.errorMessage);
        errorContainer.appendChild(errorButtonDismiss);
    }

    createField(nameOfField) {
        const container = document.createElement('div');
        const name = document.createElement('div');
        const description = document.createElement('div');
        
        container.className = 'error_field_container';
        name.className = 'error_field_name';
        description.className = 'error_field_description';
        name.innerHTML = nameOfField;

        container.appendChild(name);
        container.appendChild(description);
        return container;
    }

    createDismissButton() {
        const button = document.createElement('input');
        button.id = 'error_dismiss_button';
        button.value = 'DISMISS';
        button.type = 'button';

        button.onclick = () => {
            this.errorPopup.style.display = 'none';
        };

        return button;
    }

    showError(description) {
        this.errorPopup.style.display = 'block';
        this.processingOfError(description);
    }

    processingOfError(desc) {
        this.errorStatus.lastChild.textContent = desc.status;
        this.errorCode.lastChild.textContent = desc.code;
        this.errorMessage.lastChild.textContent = desc.message;
    }
}

export default ErrorPopup;