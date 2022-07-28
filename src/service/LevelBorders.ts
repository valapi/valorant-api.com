//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceLevelBorders {
    uuid: string;
    startingLevel: number;
    levelNumberAppearance: string;
    smallPlayerCardAppearance: string;
    assetPath: string;
}

//class

class LevelBorders {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceLevelBorders[]>> {
        return await this.RequestClient.get('/levelborders' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceLevelBorders>> {
        return await this.RequestClient.get(`/levelborders/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { LevelBorders };
export type { ValAPIServiceLevelBorders };