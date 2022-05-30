//import

import type { ValRequestClient } from "@valapi/lib";
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
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceBuddies[]>> {
        return await this.RequestClient.get('/buddies' + `?language=${this.language}`);
    }

    public async getLevels():Promise<ValAPIClientService<ValAPIServiceBuddyLevels[]>> {
        return await this.RequestClient.get(`/buddies/levels` + `?language=${this.language}`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceBuddies>> {
        return await this.RequestClient.get(`/buddies/${uuid}` + `?language=${this.language}`);
    }

    public async getLevelByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceBuddyLevels>> {
        return await this.RequestClient.get(`/buddies/levels/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Buddies };
export type { ValAPIServiceBuddies, ValAPIServiceBuddyLevels };