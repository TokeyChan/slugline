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
import { HttpRequest } from './base';

class SluglineEditor extends HTMLElement {
    pages = [];
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


        this.cursor = new Cursor();
        this.pages[this.pages.length - 1].appendChild(this.cursor);
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
