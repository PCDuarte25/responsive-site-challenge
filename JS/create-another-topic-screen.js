class CreateAnotherTopicScreen {
    constructor(element, cardBlur, anotherTopic) {
        this.element = element;
        this.cardBlur = cardBlur;
        this.anotherTopic = anotherTopic
    }

    get buttonAnotherTopic() {
        return this.element.querySelector('.discussion-btn-another-topic')
    }

    showAnotherTopic() {
        this.cardBlur.style.display = 'none';
        this.element.style.display = 'none';
        this.anotherTopic.style.display = 'block';

    }

    addEventListener() {
        this.buttonAnotherTopic.addEventListener('click', () => {
            this.showAnotherTopic();
        });
    }
}
