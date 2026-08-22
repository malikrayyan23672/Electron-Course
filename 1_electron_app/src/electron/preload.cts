// import { getStaticData } from "./resourceManager"

const electron = require('electron')

electron.contextBridge.exposeInMainWorld("electron", {
    subscribeStatistics: (callback: (statistics: Statistics) => void ) => {

        ipcOn("statistics", (data) => {

        callback(data)


        })

    },
    getStaticData: () => ipcInvoke('getStaticData')
} satisfies Window['electron'])

function ipcInvoke<Key extends keyof EventPayloadMapping>(key: Key) : Promise<EventPayloadMapping[Key]>{

    return electron.ipcRenderer.invoke(key);


}

function ipcOn<Key extends keyof EventPayloadMapping>(key: Key, callback: (payload: EventPayloadMapping[Key]) => void){

    electron.ipcRenderer.on(key, (_: undefined, payload: Statistics) => callback)

}