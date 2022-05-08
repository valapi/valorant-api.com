//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceBuddyLevels {
    uuid: string;
    charmLevel: number;
    displayName: string; //localized
    displayIcon: string;
    assetPath: string;
}

interface ValAPIServiceBuddies {
    uuid: string;
    displayName: string; //localized
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    assetPath: string;
    levels: Array<ValAPIServiceBuddyLevels>;
}

//class

class Buddies {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceBuddies[]>> {
        return await this.AxiosClient.request('/buddies');
    }

    public async getLevels():Promise<ValAPIClientService<ValAPIServiceBuddyLevels[]>> {
        return await this.AxiosClient.request(`/buddies/levels`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceBuddies>> {
        return await this.AxiosClient.request(`/buddies/${uuid}`);
    }

    public async getLevelsByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceBuddyLevels>> {
        return await this.AxiosClient.request(`/buddies/levels/${uuid}`);
    }
}

//export

export { Buddies };
export type { ValAPIServiceBuddies, ValAPIServiceBuddyLevels };