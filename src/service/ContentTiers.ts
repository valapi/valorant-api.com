//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceContentTiers {
    uuid: string;
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
    private AxiosClient: AxiosClient;
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceContentTiers[]>> {
        return await this.AxiosClient.request('/contenttiers' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceContentTiers>> {
        return await this.AxiosClient.request(`/contenttiers/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { ContentTiers };
export type { ValAPIServiceContentTiers };