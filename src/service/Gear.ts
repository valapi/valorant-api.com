//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceGear {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    description: ValAPIResponse<string>; //localized
    displayIcon: string;
    assetPath: string;
    shopData: {
        cost: number;
        category: string;
        categoryText: ValAPIResponse<string>; //localized
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

//class

class Gear {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceGear[]>> {
        return await this.RequestClient.get('/gear' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceGear>> {
        return await this.RequestClient.get(`/gear/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Gear };
export type { ValAPIServiceGear };