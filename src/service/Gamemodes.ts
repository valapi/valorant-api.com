//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceGamemodes {
    uuid: string;
    displayName: string; //localized
    duration: number; //localized
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
    displayName: string; //localized
    category: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
}

//class

class Gamemodes {
    private AxiosClient: AxiosClient;
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceGamemodes[]>> {
        return await this.AxiosClient.request('/gamemodes' + `?language=${this.language}`);
    }

    public async getEquippables():Promise<ValAPIClientService<ValAPIServiceGamemodeEquippables[]>> {
        return await this.AxiosClient.request(`/gamemodes/equippables` + `?language=${this.language}`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceGamemodes>> {
        return await this.AxiosClient.request(`/gamemodes/${uuid}` + `?language=${this.language}`);
    }

    public async getEquippableByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceGamemodeEquippables>> {
        return await this.AxiosClient.request(`/gamemodes/equippables/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Gamemodes };
export type { ValAPIServiceGamemodes, ValAPIServiceGamemodeEquippables };