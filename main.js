// Importando módulos do Electron
const { app, BrowserWindow } = require('electron')

const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// Criando uma janela
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
  })

  win.loadFile('src/index.html')
}

// Quando o aplicativo estiver pronto, crie uma janela
app.whenReady().then(() => {
  createWindow()
})