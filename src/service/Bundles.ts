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

//class

class Bundles {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceBundles[]>> {
        return await this.AxiosClient.request('/bundles');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceBundles>> {
        return await this.AxiosClient.request(`/bundles/${uuid}`);
    }
}

//export

export { Bundles };
export type { ValAPIServiceBundles };