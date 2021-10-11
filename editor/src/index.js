import {
    SluglineActionElement,
    SluglineDialogueElement,
    SluglineHeadingElement,
    SluglineNameElement,
    SluglineParentheticalElement,
    SluglineTextElement,
    SluglineTransitionElement
} from './elements';
import Cursor from './cursor';
import SluglinePage from './page';
import { HttpRequest } from './base';

class SluglineEditor extends HTMLElement {
    pages = [];
    elements = []; // Ein SluglineElement Array. (Also halt Subklassen davon)
    style = "";
    constructor() {
        super();
        
        this.attachShadow({mode: 'open'});
        
        const style_link = document.getElementById('editor_style').href;

        const request = new HttpRequest();
        request.open('GET', style_link);
        request.send().then((result) => {
            const style = document.createElement('style');
            style.textContent = result;
            this.shadowRoot.appendChild(style);
        });
    }
    connectedCallback() { //wird automatisch aufgerufen
        this.initialize();

        this.pages[this.pages.length - 1].appendChild(this.cursor);
        document.addEventListener('keydown', (e) => {
            this.cursor.handle_key(e);
        });
    }
    initialize(config_file = null) {
        if (config_file != null) {
            this.initialize_from_file(config_file);
        } else {
            this.add_page(new SluglinePage());
            this.add_element(new )
        }
        this.cursor = new Cursor();
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
