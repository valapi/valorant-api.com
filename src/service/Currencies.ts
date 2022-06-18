//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceCurrencies {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    displayNameSingular: ValAPIResponse<string>; //localized
    displayIcon: string;
    largeIcon: string;
    assetPath: string;
}

//class

class Currencies {
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceCurrencies[]>> {
        return await this.RequestClient.get('/currencies' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCurrencies>> {
        return await this.RequestClient.get(`/currencies/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Currencies };
export type { ValAPIServiceCurrencies };