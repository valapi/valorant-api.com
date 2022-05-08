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