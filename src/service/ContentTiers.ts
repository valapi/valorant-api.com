//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceContentTiers {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    devName: string;
    rank: number;
    juiceValue: number;
    juiceCost: number;
    highlightColor: string;
    displayIcon: string;
    assetPath: string;
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

    public async get(): Promise<ValAPIClientService<ValAPIServiceContentTiers[]>> {
        return await this.RequestClient.get('/contenttiers' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceContentTiers>> {
        return await this.RequestClient.get(`/contenttiers/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { ContentTiers };
export type { ValAPIServiceContentTiers };