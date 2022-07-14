import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServiceBundles {
    uuid: string;
    displayName: ValAPIResponse<string>;
    displayNameSubText: ValAPIResponse<string>;
    description: ValAPIResponse<string>;
    extraDescription: ValAPIResponse<string>;
    promoDescription: ValAPIResponse<string>;
    useAdditionalContext: boolean;
    displayIcon: string;
    displayIcon2: string;
    verticalPromoImage: string;
    assetPath: string;
}
declare class Bundles {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceBundles[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceBundles>>;
}
export { Bundles };
export type { ValAPIServiceBundles };
