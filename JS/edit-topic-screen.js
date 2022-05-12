class EditTopicScreen {
    constructor(element, cardBlur, topicSentScreen) {
        this.element = element;
        this.cardBlur = cardBlur;
        this.topicSentScreen = topicSentScreen;
    }

    get formateButtons() {
        return this.element.querySelectorAll('.btn-text-editor');
    }

    get sentButton() {
        return this.element.querySelector('.btn-send');
    }

    get content() {
        return this.element.querySelector('.content');
    }

    showTopicSent() {
        this.element.style.display = "none";
        this.cardBlur.style.display = "block";
        this.topicSentScreen.style.display = "flex";        
    }

    addEventListeners() {
        this.formateButtons.forEach(formateButton => {
            formateButton.addEventListener('click', () => {
                let command = formateButton.dataset['element'];
                document.execCommand(command, false, null);
                this.content.focus();
            });
        });

        this.sentButton.addEventListener('click', () => {
            this.showTopicSent();
        });
    }
}