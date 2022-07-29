//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Bundles {
    export interface Bundles {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        displayNameSubText: ValAPIClient.Response<string>; //localized
        description: ValAPIClient.Response<string>; //localized
        extraDescription: ValAPIClient.Response<string>; //localized
        promoDescription: ValAPIClient.Response<string>; //localized
        useAdditionalContext: boolean;
        displayIcon: string;
        displayIcon2: string;
        verticalPromoImage: string;
        assetPath: string;
    }
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

    public async get(): Promise<ValAPIClient.Service<Bundles.Bundles[]>> {
        return await this.RequestClient.get('/bundles' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Bundles.Bundles>> {
        return await this.RequestClient.get(`/bundles/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Bundles };