type Statistics = {

    cpuUsage: number;
    ramUsage: number;

}

type StaticData = {

    cpuModel: string;
}

interface Window{

    electron: {
        subscribeStatistics: (callback: (statistics: Statistics) => void) => void 
        getStaticData: () => Promise<StaticData>
    }
}