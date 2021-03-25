// main.js
const { app, BrowserWindow, ipcMain ,Notification} = require('electron')
const path = require('path')
const isDev = !app.isPackaged;



// 리로드
if (isDev){
  require('electron-reload')(__dirname,{
    electron: path.join(__dirname,'node_modules','.bin','electron')
  })
}

// 메세지 리스너
ipcMain.on('type1', (_,msg)=> {
  new Notification({title: 'title1',body: msg }).show();
 })
 
ipcMain.on('app-quit', ()=> {
  app.quit()    
})


 // 렌더러
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
    }
  })
  win.loadFile('index.html')
  win.webContents.openDevTools();
}



//////////////////////////////////////////////////////////////////////////
// 앱 조작
app.whenReady().then(() => {
  createWindow()


})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})