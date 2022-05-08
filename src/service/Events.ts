//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceEvents {
    uuid: string;
    displayName: string; //localized
    shortDisplayName: string; //localized
    startTime: string | Date;
    endTime: string | Date;
    assetPath: string;
}