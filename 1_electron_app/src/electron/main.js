import {app, BrowserWindow} from 'electron'
import path from 'path'

app.on('ready', () => {

    const mainWinndow = new BrowserWindow({

    
    })

    mainWinndow.loadFile(path.join(app.getAppPath(), "dist-react/index.html"))
})