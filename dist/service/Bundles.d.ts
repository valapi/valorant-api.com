import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Bundles {
    interface Bundles {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        displayNameSubText: ValAPIClient.Response<string>;
        description: ValAPIClient.Response<string>;
        extraDescription: ValAPIClient.Response<string>;
        promoDescription: ValAPIClient.Response<string>;
        useAdditionalContext: boolean;
        displayIcon: string;
        displayIcon2: string;
        verticalPromoImage: string;
        assetPath: string;
    }
}
declare class Bundles {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Bundles.Bundles[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Bundles.Bundles>>;
}
export { Bundles };
