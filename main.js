const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  nativeImage,
  screen,
  Notification
} = require("electron");
const path = require("path");
const WindowPosition = require("electron-window-position");

let tray = null;
let window = undefined;

app.dock.hide();

function createWindow() {
  // Create the browser window.
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  window = new BrowserWindow({
    width: 0.3 * width,
    height: 0.1 * height,
    frame: false,
    transparent: true,

    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.

  window.loadFile("public/index.html");

  // Hide the window when it loses focus
  window.on("blur", () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide();
    }
  });
  let position = getWindowPosition();
  window.setPosition(position.x, position.y, false);

  // Open the DevTools.
  // window.webContents.openDevTools();
}

const createTray = () => {
  // const nImage = nativeImage.createFromPath(path.join(__dirname, "/hippo.png"));
  tray = new Tray(path.join(__dirname, "/Icons/icon_16@2x.png"));
  console.log("Creating a Tray!!");
  tray.setToolTip("Consulting Hours");
  tray.on("click", function(event) {
    toggleWindow();
  });
};

const toggleWindow = () => {
  window.isVisible() ? window.hide() : showWindow();
};

const showWindow = () => {
  const position = getWindowPosition();
  window.setPosition(position.x, position.y, false);
  window.show();
};

const getWindowPosition = () => {
  const windowBounds = window.getBounds();
  const trayBounds = tray.getBounds();

  // Center window horizontally below the tray icon
  const x = Math.round(
    trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
  );
  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 6);
  return { x: x, y: y };
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createTray();
  createWindow();
  handleEvents();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const handleEvents = () => {
  ipcMain.on("friendly-reminder", (event, arg) => {
    let timerNotification = new Notification({
      title: "Time Keeper",
      subtitle: "Just Checking...",
      body: `Still working on Task ${arg.task_name} ?`
    });
    setTimeout(() => timerNotification.show(), 2000);
  });
};
