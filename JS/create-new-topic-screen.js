class CreateNewTopicScreen {
    constructor(element, newTopicElement) {
        this.element = element;
        this.newTopicElement = newTopicElement;
    }

    addEventListener() {
        this.buttonNewTopic.addEventListener('click', () => {
            this.showNewTopic()
        });
    }
    
    get buttonNewTopic() {
        return this.element.querySelector('.btn-new-topic');
    }

    showNewTopic() {
        this.element.style.display = 'none';
        this.newTopicElement.style.display = 'block';
    }
}