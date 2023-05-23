const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create a new browser window
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Enable Node.js integration in the renderer process
    }
  });

  // Load the HTML file into the window
  mainWindow.loadFile('index.html');
}

// Execute createWindow() when Electron has finished initialization
app.whenReady().then(createWindow);
