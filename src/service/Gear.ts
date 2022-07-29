//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Gear {
    export interface Gear {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        description: ValAPIClient.Response<string>; //localized
        displayIcon: string;
        assetPath: string;
        shopData: {
            cost: number;
            category: string;
            categoryText: ValAPIClient.Response<string>; //localized
            gridPosition: {
                row: number;
                column: number;
            };
            canBeTrashed: boolean;
            image: string;
            newImage: string;
            newImage2: string;
            assetPath: string;
        };
    }
}

//class

class Gear {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Gear.Gear[]>> {
        return await this.RequestClient.get('/gear' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Gear.Gear>> {
        return await this.RequestClient.get(`/gear/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Gear };