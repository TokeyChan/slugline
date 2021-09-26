import StyleManager from "./style";

export default class SluglinePage extends HTMLElement {
    html_name = "slugline-page";
    constructor() {
        super();
    }
    connectedCallback() {
        this.style_manager = new StyleManager(this);
        this.style_manager.update(StyleManager.getActiveStyle(this.html_name));
    }
}

customElements.define('slugline-page', SluglinePage);