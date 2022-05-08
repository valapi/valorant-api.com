//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceGear {
    uuid: string;
    displayName: string; //localized
    description: string; //localized
    displayIcon: string;
    assetPath: string;
    shopData: {
        cost: number;
        category: string;
        categoryText: string; //localized
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
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceGear[]>> {
        return await this.AxiosClient.request('/gear');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceGear>> {
        return await this.AxiosClient.request(`/gear/${uuid}`);
    }
}

//export

export { Gear };
export type { ValAPIServiceGear };