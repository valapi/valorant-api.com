import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceMaps {
    uuid: string;
    displayName: string;
    coordinates: string;
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
        regionName: string;
        superRegionName: string;
        location: {
            x: number;
            y: number;
        };
    }>;
}
declare class Maps {
    private AxiosClient;
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceMaps[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceMaps>>;
}
export { Maps };
export type { ValAPIServiceMaps };
//# sourceMappingURL=Maps.d.ts.map