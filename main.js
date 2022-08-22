// Imports
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { join } = require('path')
require('electron-reload')(__dirname)

// Global Variables
const mainWindow = undefined;

// The function that creates the window
const main = () => {
    const mainWindow = new BrowserWindow({
        preload: join(__dirname, 'preload.js'), // Preload file
        width: 1000, // Width of the window
        height: 600, // Height of the window
        resizable: false, // Cannot resize window. Set to 'true' to able to resize the window
        frame: false, // Disable default electron titlebar and close buttons
        transparent: true, // Make the window transparent to add curved edges
        webPreferences: ({
            nodeIntegration: true,
            contextIsolation: false
        }),
        icon: join(__dirname, 'src/icons/aceelectron.ico')
    })

    // Load the index.html file to display the webpage
    mainWindow.loadFile(join(__dirname, 'src/index.html'))
    // Disable default electron menubar
    mainWindow.setMenuBarVisibility(false)

    // Custom titlebar button events
    ipcMain.on('min_win', () => {
        mainWindow.minimize();
    })

    ipcMain.on('close_win', () => {
        mainWindow.close();
    })
}

// When the app is ready, then create the window !IMPORTANT
app.whenReady().then(main)