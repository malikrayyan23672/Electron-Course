import {app, BrowserWindow} from 'electron'
import path from 'path'
import { isDev } from './util.js'

app.on('ready', () => {

    const mainWinndow = new BrowserWindow({

    
    })

    if(isDev()){
        mainWinndow.loadURL("http://localhost:3698")
    }else{
        mainWinndow.loadFile(path.join(app.getAppPath(), "dist-react/index.html"))

    }

})