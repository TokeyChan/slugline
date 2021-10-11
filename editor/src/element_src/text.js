import SluglineElement from "./base";

export default class SluglineTextElement extends SluglineElement {
    constructor() {
        super();
    }
}

customElements.define("slugline-text", SluglineTextElement);