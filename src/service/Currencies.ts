//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Currencies {
    export interface Currencies {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        displayNameSingular: ValAPIClient.Response<string>; //localized
        displayIcon: string;
        largeIcon: string;
        assetPath: string;
    }
}

//class

class Currencies {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Currencies.Currencies[]>> {
        return await this.RequestClient.get('/currencies' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Currencies.Currencies>> {
        return await this.RequestClient.get(`/currencies/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Currencies };