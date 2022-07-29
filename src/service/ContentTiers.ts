//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace ContentTiers {
    export interface ContentTiers {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        devName: string;
        rank: number;
        juiceValue: number;
        juiceCost: number;
        highlightColor: string;
        displayIcon: string;
        assetPath: string;
    }
}

//class

class ContentTiers {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<ContentTiers.ContentTiers[]>> {
        return await this.RequestClient.get('/contenttiers' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<ContentTiers.ContentTiers>> {
        return await this.RequestClient.get(`/contenttiers/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { ContentTiers };