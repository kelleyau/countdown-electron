const electron = require('electron');
//fluent-ffmpeg is a node module that is a helper api to talk
//to the application ffmpeg.
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;

//This just defines maiNWindow so that we can scope it globally
//let mainWindow;

app.on('ready', () => {
    console.log('App is ready');

    app.dock.hide()
    let alwaysOnTopWindow = new BrowserWindow({ width: 300, height: 150 })
    alwaysOnTopWindow.setAlwaysOnTop(true, 'floating')
    alwaysOnTopWindow.setVisibleOnAllWorkspaces(true)
    alwaysOnTopWindow.setFullScreenable(false)
    alwaysOnTopWindow.loadURL(`file://${__dirname}/index.html`);
    app.dock.show()

});