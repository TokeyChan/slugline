const tmp = require('tmp');
const fs = require('fs');

const VARIABLE_REGEX = /{{\s*(.+)\s*}}/g;

module.exports = {

    renderTemplate: (win, src, context) => {
        const temp_file = tmp.fileSync({postfix: '.html'});
        let template = fs.readFileSync(src, {'encoding': 'utf-8', 'flag': 'r'});

        template = template.replace(VARIABLE_REGEX, (match, capture) => {
            capture = capture.trim();
            return context[capture];
        });
        
        fs.writeFileSync(temp_file.name, template);
        win.loadFile(temp_file.name);
        win.on('closed', () => {
            temp_file.removeCallback();
        });
    },
}