//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceCurrencies {
    uuid: string;
    displayName: string; //localized
    displayNameSingular: string; //localized
    displayIcon: string;
    largeIcon: string;
    assetPath: string;
}

//class

class Currencies {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceCurrencies[]>> {
        return await this.AxiosClient.request('/currencies');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCurrencies>> {
        return await this.AxiosClient.request(`/currencies/${uuid}`);
    }
}

//export

export { Currencies };
export type { ValAPIServiceCurrencies };