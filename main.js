const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
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
	})

    win.loadFile('views/main/main.html');
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