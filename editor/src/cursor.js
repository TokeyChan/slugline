export default class Cursor extends HTMLElement {
    is_active; //Boolean, der checkt ob gerade geschrieben wird
    is_visible = true;
    element; //Das Element, in dem sich der Cursor gerade befindet

    constructor() {
        super();
    }
    connectedCallback() {
        setInterval(() => blink(this), 800);
    }
    handle_key(keydata) {
        console.log(keydata);
    }
}

function blink(cursor) {
    if (cursor.is_visible) 
        cursor.style.opacity = 0;
    else
        cursor.style.opacity = 1;

    cursor.is_visible = !cursor.is_visible;
}
customElements.define('slugline-cursor', Cursor);