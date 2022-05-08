//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceBundles {
    uuid: string;
    displayName: string; //localized
    displayNameSubText: string; //localized
    description: string; //localized
    extraDescription: string; //localized
    promoDescription: string; //localized
    useAdditionalContext: boolean;
    displayIcon: string;
    displayIcon2: string;
    verticalPromoImage: string;
    assetPath: string;
}