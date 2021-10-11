const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    target: 'electron-renderer',
    output: {
        filename: 'slugline-editor.js',
        path: path.resolve(__dirname, 'dist')
    }
}