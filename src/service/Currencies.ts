//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceCurrencies {
    uuid: string;
    displayName: string; //localized
    displayNameSingular: string; //localized
    displayIcon: string;
    largeIcon: string;
    assetPath: string;
}