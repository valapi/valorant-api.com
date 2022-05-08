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
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(isPlayableCharacter?:boolean):Promise<ValAPIClientService<ValAPIServiceAgents[]>> {
        let url = `/agents` + `?language=${this.language}`;

        if(isPlayableCharacter === false){
            url += `&isPlayableCharacter=false`;
        } else if(isPlayableCharacter === true) {
            url += `&isPlayableCharacter=true`;
        }

        return await this.AxiosClient.request(url);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceAgents>> {
        return await this.AxiosClient.request(`/agents/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Agents };
export type { ValAPIServiceAgents };