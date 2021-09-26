export default class StyleManager {
    element; //das HTML Element, dessen styles gemanaged werden
    values; //ein Objekt, in dem die Key-Value-Pairs der Style Werte gespeichert werden
    constructor(element) {
        this.element = element;
        this.values = {};
    }
    add(key, value) {
        if (key in this.values) {
            throw "Dieser Style ist bereits enthalten";
        }
        this.values[key] = value;
        this._update();
    }
    remove(key) {
        delete this.values[key];
        this._update();
    }
    update(values) {
        this.values = values;
        this._update();
    }
    _update() {
        const style = Object.keys(this.values).map(key => key + ": " + this.values[key]).join(";");
        this.element.style.cssText = style;
    }
    static getActiveStyle(element_name) {
        // Here, the user-selected stylesheet should be grabbed. I do not know how to do this yet, I will have to 
        // implement some kind of API. 
        // While that does not work, I will get the basic one
        return window.slugline.getActiveStyle(element_name);
    }
}