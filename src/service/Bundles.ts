//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceBundles {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    displayNameSubText: ValAPIResponse<string>; //localized
    description: ValAPIResponse<string>; //localized
    extraDescription: ValAPIResponse<string>; //localized
    promoDescription: ValAPIResponse<string>; //localized
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

    public constructor(RequestClient: ValRequestClient, language: string) {
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