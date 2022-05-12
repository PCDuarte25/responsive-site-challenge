class Card {
    constructor(element, fullText, sliceText, isExpanded) {
        // In this class element = main-card
        this.element = element;
        this.isExpanded = isExpanded;
        this.fullText = fullText;
        this.sliceText = sliceText;
    }

    addEventListener() {
        this.element.addEventListener('click', () => {
            if (this.isExpanded) {
                this.hideAnswers();
            } else {
                this.showAnswers();
            }
        });
    }

    get cardBody() {
        return this.element.querySelector('.cards-body');
    }

    expandText() {
        this.cardBody.innerHTML = this.fullText;
    }

    reduceText() {
        this.cardBody.innerHTML = this.sliceText;
    }

    get likesCount() {
        return this.element.querySelector('.cards-footer').querySelectorAll('p')[2];
    }

    get answersCount() {
        return this.element.querySelector('.cards-footer').querySelectorAll('p')[3];
    }

    setLikesCount(value) {
        this.likesCount.textContent = value === 1 ? `${value} like` : `${value} likes`;
    }

    setAnswersCount(value) {
        this.answersCount.textContent = value === 1 ? `${value} resposta` : `${value} respostas`;
    }
    
    get answers() {
        return this.element.querySelector('.answers-container');
    }

    showAnswers() {
        this.expandText();
        this.setAnswersCount(4);
        this.setLikesCount(4);
        this.answers.style.display = 'block';
        this.isExpanded = true;
    }

    hideAnswers() {
        this.reduceText();
        this.setAnswersCount(1);
        this.setLikesCount(1);
        this.answers.style.display = 'none'
        this.isExpanded = false;
    }
}