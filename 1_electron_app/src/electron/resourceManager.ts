import osUtils from 'os-utils';
import os from 'os'
import { BrowserWindow } from 'electron';
import { ipcWebContentsSend } from './util.js';

const POLL_INTERVAL = 500

export function pollResources(mainWindow: BrowserWindow){

    setInterval(async() => {

        const cpuUsage = await getCPUUsage()
        const ramUsage = getRAMUsage();

        // mainWindow.webContents.send("statistics", {
        //     cpuUsage,
        //     ramUsage
        // })

        ipcWebContentsSend('statistics', mainWindow.webContents, {
            cpuUsage: cpuUsage,
            ramUsage: ramUsage
        })

        // console.log({cpuUsage, ramUsage})

    }, POLL_INTERVAL)
}

export function getStaticData(){

    const cpuModel = os.cpus()[0].model;

    return {
        cpuModel,
    }

}

function getCPUUsage() : Promise<number>{

    return new Promise(resolve => {
        osUtils.cpuUsage(resolve)
    })

}

function getRAMUsage(){

    return 1 - osUtils.freememPercentage();
}