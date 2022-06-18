//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceGamemodes {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    duration: ValAPIResponse<number>; //localized
    allowsMatchTimeouts: boolean;
    isTeamVoiceAllowed: boolean;
    isMinimapHidden: boolean;
    orbCount: number;
    teamRoles: Array<string>;
    gameFeatureOverrides: Array<{
        featureName: string;
        state: boolean;
    }>;
    gameRuleBoolOverrides: Array<{
        ruleName: string;
        state: boolean;
    }>;
    displayIcon: string;
    assetPath: string;
}

interface ValAPIServiceGamemodeEquippables {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    category: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
}

//class

class Gamemodes {
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceGamemodes[]>> {
        return await this.RequestClient.get('/gamemodes' + `?language=${this.language}`);
    }

    public async getEquippables():Promise<ValAPIClientService<ValAPIServiceGamemodeEquippables[]>> {
        return await this.RequestClient.get(`/gamemodes/equippables` + `?language=${this.language}`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceGamemodes>> {
        return await this.RequestClient.get(`/gamemodes/${uuid}` + `?language=${this.language}`);
    }

    public async getEquippableByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceGamemodeEquippables>> {
        return await this.RequestClient.get(`/gamemodes/equippables/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Gamemodes };
export type { ValAPIServiceGamemodes, ValAPIServiceGamemodeEquippables };