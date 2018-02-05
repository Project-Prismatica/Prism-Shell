const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const { exec } = require('child_process');

//Kickoff Support Services
function startRPC () {
  var rpcCmd = "node prism-rpc.js"
  exec(rpcCmd, (err, stdout, stderr) => {
    var retval = stdout;
    if (err) {
      var retval = stderr;
      console.log(retval);
    }
    console.log("[+] Kicking of the PRISM-RPC");
  });
}

//startRPC();
//PRISM-RPC (JSON REST)
//RPC controls and instantiates listiners // retrieves and returns data

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
//let $ = require('jquery');
//win.$ = $;


function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1000,
    height: 600
    //frame: false
  })
  //win.$ = win.jQuery = require('jquery');

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Explicit in-app close behavior
