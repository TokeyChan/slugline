const { app, BrowserWindow, globalShortcut } = require('electron');
const fs = require('fs');
const path = require('path');
const { renderTemplate } = require('./utils/templates');
require('electron-reloader')(module);


//Hier einfach eine Klasse verwenden, die das ganze Managed.

function createWindow() {
    const win = new BrowserWindow({
        'width': 1200,
        'height': 1000,
        'webPreferences': {
            'preload': path.join(__dirname, 'views', 'main', 'preload.js')
        }
    });
    globalShortcut.register('CommandOrControl+R', function() {
		console.log('CommandOrControl+R is pressed');
		win.reload();
	});
    renderTemplate(win, './views/main/main.html', { 
        'editor_style': `${__dirname}/views/main/styles/default_editor.css`, 
        'main_style': `${__dirname}/views/main/styles/main.css`,
        'editor_js': `${__dirname}/editor/dist/slugline-editor.js`
     })
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
});
app.on('window-all-closed', () => {
    //if (process.platform !== 'darwin') //mac
    app.quit();
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});