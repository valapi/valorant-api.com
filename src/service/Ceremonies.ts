//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceCeremonies {
    uuid: string;
    displayName: string; //localized
    assetPath: string;
}

//class

class Ceremonies  {
    private AxiosClient: AxiosClient;
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceCeremonies[]>> {
        return await this.AxiosClient.request('/ceremonies' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCeremonies>> {
        return await this.AxiosClient.request(`/ceremonies/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Ceremonies };
export type { ValAPIServiceCeremonies };