const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

//This just defines maiNWindow so that we can scope it globally
//let mainWindow;

app.on('ready', () => {
    console.log('App is ready');

    app.dock.hide()
    let alwaysOnTopWindow = new BrowserWindow({ width: 300, height: 150, frame: false, movable: true })
    alwaysOnTopWindow.setAlwaysOnTop(true, 'floating')
    alwaysOnTopWindow.setVisibleOnAllWorkspaces(true)
    alwaysOnTopWindow.show();
    alwaysOnTopWindow.loadURL(`file://${__dirname}/index.html`);
    app.dock.show()

});
