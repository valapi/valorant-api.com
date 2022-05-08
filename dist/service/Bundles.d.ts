import type { AxiosClient } from "../client/AxiosClient";
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
    private AxiosClient;
    constructor(AxiosClient: AxiosClient);
    get(): Promise<ValAPIClientService<ValAPIServiceBundles[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceBundles>>;
}
export { Bundles };
export type { ValAPIServiceBundles };
//# sourceMappingURL=Bundles.d.ts.map