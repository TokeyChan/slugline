import {
    SluglineActionElement,
    SluglineDialogueElement,
    SluglineHeadingElement,
    SluglineNameElement,
    SluglineParentheticalElement,
    SluglineTransitionElement
} from './elements';
import Cursor from './cursor';
import SluglinePage from './page';
import StyleManager from './style';

class SluglineEditor extends HTMLElement {
    pages = [];
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() { //wird automatisch aufgerufen
        this.cursor = new Cursor();
        //style
        const style = document.createElement("style");
        style.textContent = ":host { all: initial }"
        this.shadowRoot.appendChild(style);

        this.style_manager = new StyleManager(this);
        this.style_manager.update(StyleManager.getActiveStyle('slugline-editor'));

        this.initialize();
    }
    initialize(config_file = null) {
        if (config_file != null) {
            this.initialize_from_file(config_file);
        }
        this.add_page(new SluglinePage());
    }
    initialize_from_file(config_file) {

    }
    add_page(page) {
        this.shadowRoot.appendChild(page);
        this.pages.push(page);
    }
    attatch_listeners() {
        this.addEventListener('keydown', (e) => {
            console.log(e.key);
        });
    }
}


customElements.define("slugline-editor", SluglineEditor);
