//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Sprays {
    export interface SprayLevels {
        uuid: string;
        sprayLevel: number;
        displayName: ValAPIClient.Response<string>; //localized
        displayIcon: string;
        assetPath: string;
    }

    export interface Sprays {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        category: string;
        themeUuid: string;
        displayIcon: string;
        fullIcon: string;
        fullTransparentIcon: string;
        animationPng: string;
        animationGif: string;
        assetPath: string;
        levels: Array<Sprays.SprayLevels>;
    }
}

//class

class Sprays {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Sprays.Sprays[]>> {
        return await this.RequestClient.get('/sprays' + `?language=${this.language}`);
    }

    public async getLevels(): Promise<ValAPIClient.Service<Sprays.SprayLevels[]>> {
        return await this.RequestClient.get(`/sprays/levels` + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Sprays.Sprays>> {
        return await this.RequestClient.get(`/sprays/${uuid}` + `?language=${this.language}`);
    }

    public async getLevelByUuid(uuid: string): Promise<ValAPIClient.Service<Sprays.SprayLevels>> {
        return await this.RequestClient.get(`/sprays/levels/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Sprays };