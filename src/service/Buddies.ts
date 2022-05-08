//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceBuddyLevels {
    uuid: string;
    charmLevel: number;
    displayName: string; //localized
    displayIcon: string;
    assetPath: string;
}

interface ValAPIServiceBuddies {
    uuid: string;
    displayName: string; //localized
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    assetPath: string;
    levels: Array<ValAPIServiceBuddyLevels>;
}