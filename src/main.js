const { BrowserWindow, Notification } = require('electron');
const data = require('./data');

const getData = () => {
    return data;
};


function createWindow() {
    window = new BrowserWindow({
        width: 1200,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    })
    window.loadFile('src/ui/index.html');
}

module.exports = { createWindow, getData};