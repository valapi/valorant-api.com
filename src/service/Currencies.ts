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
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceCurrencies[]>> {
        return await this.AxiosClient.request('/currencies' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCurrencies>> {
        return await this.AxiosClient.request(`/currencies/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Currencies };
export type { ValAPIServiceCurrencies };