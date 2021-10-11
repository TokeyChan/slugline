import SluglineElement from "./base";

export default class SluglineNameElement extends SluglineElement {
    constructor() {
        super();
    }
}

customElements.define("slugline-name", SluglineNameElement);