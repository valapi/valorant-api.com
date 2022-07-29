import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Maps {
    interface Maps {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        coordinates: ValAPIClient.Response<string>;
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
            regionName: ValAPIClient.Response<string>;
            superRegionName: ValAPIClient.Response<string>;
            location: {
                x: number;
                y: number;
            };
        }>;
    }
}
declare class Maps {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Maps.Maps[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Maps.Maps>>;
}
export { Maps };
