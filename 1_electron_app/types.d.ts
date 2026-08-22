type Statistics = {

    cpuUsage: number;
    ramUsage: number;

}

type StaticData = {

    cpuModel: string;
}

type EventPayloadMapping = {

    statistics: Statistics
    getStaticData: StaticData;
}

interface Window{

    electron: {
        subscribeStatistics: (callback: (statistics: Statistics) => void) => void 
        getStaticData: () => Promise<StaticData>
    }
}