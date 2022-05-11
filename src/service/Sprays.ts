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
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceSprays[]>> {
        return await this.AxiosClient.request('/sprays' + `?language=${this.language}`);
    }

    public async getLevels():Promise<ValAPIClientService<ValAPIServiceSprayLevels[]>> {
        return await this.AxiosClient.request(`/sprays/levels` + `?language=${this.language}`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceSprays>> {
        return await this.AxiosClient.request(`/sprays/${uuid}` + `?language=${this.language}`);
    }

    public async getLevelByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceSprayLevels>> {
        return await this.AxiosClient.request(`/sprays/levels/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Sprays };
export type { ValAPIServiceSprays, ValAPIServiceSprayLevels };