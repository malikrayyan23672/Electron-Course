import osUtils from 'os-utils';
import os from 'os'
import { BrowserWindow } from 'electron';

const POLL_INTERVAL = 500

export function pollResources(mainWindow: BrowserWindow){

    setInterval(async() => {

        const cpuUsage = await getCPUUsage()
        const ramUsage = getRAMUsage();

        mainWindow.webContents.send("statistics", {
            cpuUsage,
            ramUsage
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

function getCPUUsage(){

    return new Promise(resolve => {
        osUtils.cpuUsage(resolve)
    })

}

function getRAMUsage(){

    return 1 - osUtils.freememPercentage();
}