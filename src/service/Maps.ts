//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceMaps {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    coordinates: ValAPIResponse<string>; //localized
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
        regionName: ValAPIResponse<string>; //localized
        superRegionName: ValAPIResponse<string>; //localized
        location: {
            x: number;
            y: number;
        };
    }>;
}

//class

class Maps {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceMaps[]>> {
        return await this.RequestClient.get('/maps' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceMaps>> {
        return await this.RequestClient.get(`/maps/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Maps };
export type { ValAPIServiceMaps };