//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Maps {
    export interface Maps {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        coordinates: ValAPIClient.Response<string>; //localized
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
            regionName: ValAPIClient.Response<string>; //localized
            superRegionName: ValAPIClient.Response<string>; //localized
            location: {
                x: number;
                y: number;
            };
        }>;
    }
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

    public async get(): Promise<ValAPIClient.Service<Maps.Maps[]>> {
        return await this.RequestClient.get('/maps' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Maps.Maps>> {
        return await this.RequestClient.get(`/maps/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Maps };