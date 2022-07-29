//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Themes {
    export interface Themes {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        displayIcon: string;
        storeFeaturedImage: string;
        assetPath: string;
    }
}

//class

class Themes {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Themes.Themes[]>> {
        return await this.RequestClient.get('/themes' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Themes.Themes>> {
        return await this.RequestClient.get(`/themes/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Themes };