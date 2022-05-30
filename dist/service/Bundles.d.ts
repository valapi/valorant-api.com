import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceBundles {
    uuid: string;
    displayName: string;
    displayNameSubText: string;
    description: string;
    extraDescription: string;
    promoDescription: string;
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
//# sourceMappingURL=Bundles.d.ts.map