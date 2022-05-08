//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceAgents {
    uuid: string;
    displayName: string; //localized
    description: string; //localized
    developerName: string;
    characterTags: Array<string>; //localized
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: Array<string>;
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: {
        uuid: string;
        displayName: string; //localized
        description: string; //localized
        displayIcon: string;
        assetPath: string;
    };
    abilities: Array<{
        slot: string;
        displayName: string; //localized
        description: string; //localized
        displayIcon: string;
    }>;
    voiceLines: {
        minDuration: number;
        maxDuration: number;
        mediaList: Array<{
            id: number;
            wwise: string;
            wave: string;
        }>;
    };
}

//class

class Agents {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceAgents[]>> {
        return await this.AxiosClient.request(`/agents`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceAgents>> {
        return await this.AxiosClient.request(`/agents/${uuid}`);
    }
}

//export

export { Agents };
export type { ValAPIServiceAgents };