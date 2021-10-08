const { contextBridge } = require('electron');
const { renderTemplate } = require('./../../utils/templates');

window.addEventListener('DOMContentLoaded', () => {

});

contextBridge.exposeInMainWorld(
    'slugline',
    {

    }
);
