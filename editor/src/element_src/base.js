export default class SluglineElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
    }
}

//Sollte NIE instanziert werden
customElements.define("slugline-element", SluglineElement);