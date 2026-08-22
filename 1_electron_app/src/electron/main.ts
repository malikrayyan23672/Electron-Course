import {app, BrowserWindow, ipcMain} from 'electron'
import path from 'path'
import { ipcMainHandle, isDev } from './util.js'
import { getStaticData, pollResources } from './resourceManager.js'
import { getPreloadPath, getUIPath } from './pathResolver.js'

app.on('ready', () => {

    const mainWindow = new BrowserWindow({

        webPreferences: {
            preload: getPreloadPath()
        }
    
    })

    if(isDev()){
        mainWindow.loadURL("http://localhost:3698")
    }else{
        mainWindow.loadFile(getUIPath())

    }

    // handleGetStaticData(() => {
    //     return getStaticData()
    // })

    ipcMainHandle('getStaticData', () => {
        return getStaticData()
    })

    pollResources(mainWindow);

    

})

function handleGetStaticData(callback: () => StaticData){

    // ipcMain.handle('getStaticData', callback)

}