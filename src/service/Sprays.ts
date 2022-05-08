//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceSprayLevels {
    uuid: string;
    sprayLevel: number;
    displayName: string; //localized
    displayIcon: string;
    assetPath: string;
}

interface ValAPIServiceSprays {
    uuid: string;
    displayName: string; //localized
    category: string;
    themeUuid: string;
    displayIcon: string;
    fullIcon: string;
    fullTransparentIcon: string;
    animationPng: string;
    animationGif: string;
    assetPath: string;
    levels: Array<ValAPIServiceSprayLevels>;
}

//class

class Sprays {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceSprays[]>> {
        return await this.AxiosClient.request('/sprays');
    }

    public async getLevels():Promise<ValAPIClientService<ValAPIServiceSprayLevels[]>> {
        return await this.AxiosClient.request(`/sprays/levels`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceSprays>> {
        return await this.AxiosClient.request(`/sprays/${uuid}`);
    }

    public async getLevelsByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceSprayLevels>> {
        return await this.AxiosClient.request(`/sprays/levels/${uuid}`);
    }
}

//export

export { Sprays };
export type { ValAPIServiceSprays, ValAPIServiceSprayLevels };