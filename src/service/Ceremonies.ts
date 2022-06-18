//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceCeremonies {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    assetPath: string;
}

//class

class Ceremonies  {
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceCeremonies[]>> {
        return await this.RequestClient.get('/ceremonies' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCeremonies>> {
        return await this.RequestClient.get(`/ceremonies/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Ceremonies };
export type { ValAPIServiceCeremonies };