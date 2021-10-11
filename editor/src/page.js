export default class SluglinePage extends HTMLElement {
    html_name = "slugline-page";
    constructor() {
        super();
    }
    connectedCallback() {
    }
}

customElements.define('slugline-page', SluglinePage);