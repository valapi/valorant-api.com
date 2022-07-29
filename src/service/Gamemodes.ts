//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Gamemodes {
    export interface Gamemodes {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        duration: ValAPIClient.Response<string>; //localized
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

    export interface GamemodeEquippables {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        category: string;
        displayIcon: string;
        killStreamIcon: string;
        assetPath: string;
    }
}

//class

class Gamemodes {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Gamemodes.Gamemodes[]>> {
        return await this.RequestClient.get('/gamemodes' + `?language=${this.language}`);
    }

    public async getEquippables(): Promise<ValAPIClient.Service<Gamemodes.GamemodeEquippables[]>> {
        return await this.RequestClient.get(`/gamemodes/equippables` + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Gamemodes.Gamemodes>> {
        return await this.RequestClient.get(`/gamemodes/${uuid}` + `?language=${this.language}`);
    }

    public async getEquippableByUuid(uuid: string): Promise<ValAPIClient.Service<Gamemodes.GamemodeEquippables>> {
        return await this.RequestClient.get(`/gamemodes/equippables/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Gamemodes };