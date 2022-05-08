//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceMaps {
    uuid: string;
    displayName: string; //localized
    coordinates: string; //localized
    displayIcon: string;
    listViewIcon: string;
    splash: string;
    assetPath: string;
    mapUrl: string;
    xMultiplier: number;
    yMultiplier: number;
    xScalarToAdd: number;
    yScalarToAdd: number;
    callouts: Array<{
        regionName: string; //localized
        superRegionName: string; //localized
        location: {
            x: number;
            y: number;
        };
    }>;
}

//class

class Maps {
    private AxiosClient: AxiosClient;
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceMaps[]>> {
        return await this.AxiosClient.request('/maps' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceMaps>> {
        return await this.AxiosClient.request(`/maps/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Maps };
export type { ValAPIServiceMaps };