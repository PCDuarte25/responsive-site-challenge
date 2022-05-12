class Summary {
    constructor(element, fullText, sliceText, isExpanded) {
        this.element = element;
        this.fullText = fullText;
        this.sliceText = sliceText;
        this.isExpanded = isExpanded;
    }

    addEventListener() {
        this.element.addEventListener('click', () => {
            if (this.isExpanded) {
                this.reduceText();
            } else {
                this.expandText();
            }
        });
    }

    setText(text) {
        this.element.innerHTML = text;
    }

    expandText() {
        this.setText(this.fullText);
        this.isExpanded = true;
    }

    reduceText() {
        this.setText(this.sliceText);
        this.isExpanded = false;
    }
}