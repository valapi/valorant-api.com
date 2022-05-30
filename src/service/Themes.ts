//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceThemes {
    uuid: string;
    displayName: string; //localized
    displayIcon: string;
    storeFeaturedImage: string;
    assetPath: string;
}

//class

class Themes {
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceThemes[]>> {
        return await this.RequestClient.get('/themes' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceThemes>> {
        return await this.RequestClient.get(`/themes/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Themes };
export type { ValAPIServiceThemes };