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

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceContentTiers[]>> {
        return await this.AxiosClient.request('/contenttiers');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceContentTiers>> {
        return await this.AxiosClient.request(`/contenttiers/${uuid}`);
    }
}

//export

export { ContentTiers };
export type { ValAPIServiceContentTiers };