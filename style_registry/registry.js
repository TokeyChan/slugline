const fs = require('fs');
const path = require('path');
const cssjs = require('jotform-css.js');

class StyleRegistry {
    constructor() {

    }
    getActiveStyle(selector) {
        const css = fs.readFileSync(path.join(__dirname, 'base.css'), {encoding:'utf8', flag:'r'});
        return this.parseStyle(css, selector);
    }
    parseStyle(css, selector) {
        const parser = new cssjs.cssjs();
        const style = parser.parseCSS(css).filter(t => t['selector'] == selector);
        let result = {};
        for (let obj of style) {
            for (let rule of obj.rules) {
                result[rule.directive] = rule.value;
            }
        }
        return result;
    }
}

module.exports = StyleRegistry;