//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceCeremonies {
    uuid: string;
    displayName: string; //localized
    assetPath: string;
}