const fs = require('fs');
const path = require('path');

class StyleRegistry {
    constructor() {

    }
    getActiveStyle() {
        const css = fs.readFileSync(path.join(__dirname, 'base.css'), {encoding:'utf8', flag:'r'});
        return css
    }
}

module.exports = StyleRegistry;