//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Buddies {
    export interface BuddyLevels {
        uuid: string;
        charmLevel: number;
        displayName: ValAPIClient.Response<string>; //localized
        displayIcon: string;
        assetPath: string;
    }

    export interface Buddies {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        assetPath: string;
        levels: Array<Buddies.BuddyLevels>;
    }
}

//class

class Buddies {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Buddies.Buddies[]>> {
        return await this.RequestClient.get('/buddies' + `?language=${this.language}`);
    }

    public async getLevels(): Promise<ValAPIClient.Service<Buddies.BuddyLevels[]>> {
        return await this.RequestClient.get(`/buddies/levels` + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Buddies.Buddies>> {
        return await this.RequestClient.get(`/buddies/${uuid}` + `?language=${this.language}`);
    }

    public async getLevelByUuid(uuid: string): Promise<ValAPIClient.Service<Buddies.BuddyLevels>> {
        return await this.RequestClient.get(`/buddies/levels/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Buddies };