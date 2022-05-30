//import

import type { ValRequestClient } from "@valapi/lib";
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
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceBundles[]>> {
        return await this.RequestClient.get('/bundles' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceBundles>> {
        return await this.RequestClient.get(`/bundles/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Bundles };
export type { ValAPIServiceBundles };