//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Ceremonies {
    export interface Ceremonies {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        assetPath: string;
    }
}

//class

class Ceremonies {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Ceremonies.Ceremonies[]>> {
        return await this.RequestClient.get('/ceremonies' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Ceremonies.Ceremonies>> {
        return await this.RequestClient.get(`/ceremonies/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Ceremonies };