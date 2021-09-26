const { contextBridge } = require('electron');
const StyleRegistry = require('./../../style_registry/registry')

const registry = new StyleRegistry();


contextBridge.exposeInMainWorld(
    'slugline',
    {
        getActiveStyle: (selector) => registry.getActiveStyle(selector)
    }
);
