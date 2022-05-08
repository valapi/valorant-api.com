//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceThemes {
    uuid: string;
    displayName: string; //localized
    displayIcon: string;
    storeFeaturedImage: string;
    assetPath: string;
}