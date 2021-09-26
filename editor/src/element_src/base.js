import StyleManager from "../style";

export default class SluglineElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.style_manager = new StyleManager(this);
        this.style_manager.update(StyleManager.getActiveStyle(this.html_name));
    }
}

//Sollte NIE instanziert werden
customElements.define("slugline-element", SluglineElement);