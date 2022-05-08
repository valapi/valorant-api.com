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
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceBuddies[]>> {
        return await this.AxiosClient.request('/buddies' + `?language=${this.language}`);
    }

    public async getLevels():Promise<ValAPIClientService<ValAPIServiceBuddyLevels[]>> {
        return await this.AxiosClient.request(`/buddies/levels` + `?language=${this.language}`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceBuddies>> {
        return await this.AxiosClient.request(`/buddies/${uuid}` + `?language=${this.language}`);
    }

    public async getLevelsByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceBuddyLevels>> {
        return await this.AxiosClient.request(`/buddies/levels/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Buddies };
export type { ValAPIServiceBuddies, ValAPIServiceBuddyLevels };