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

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceCeremonies[]>> {
        return await this.AxiosClient.request('/ceremonies');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCeremonies>> {
        return await this.AxiosClient.request(`/ceremonies/${uuid}`);
    }
}

//export

export { Ceremonies };
export type { ValAPIServiceCeremonies };