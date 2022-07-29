//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Agents {
    export interface Agents {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        description: ValAPIClient.Response<string>; //localized
        developerName: string;
        characterTags: ValAPIClient.Response<Array<string>>; //localized
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
            displayName: ValAPIClient.Response<string>; //localized
            description: ValAPIClient.Response<string>; //localized
            displayIcon: string;
            assetPath: string;
        };
        abilities: Array<{
            slot: string;
            displayName: ValAPIClient.Response<string>; //localized
            description: ValAPIClient.Response<string>; //localized
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
}

//class

class Agents {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(isPlayableCharacter?: boolean): Promise<ValAPIClient.Service<Agents.Agents[]>> {
        let url = `/agents` + `?language=${this.language}`;

        if (isPlayableCharacter === false) {
            url += `&isPlayableCharacter=false`;
        } else if (isPlayableCharacter === true) {
            url += `&isPlayableCharacter=true`;
        }

        return await this.RequestClient.get(url);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Agents.Agents>> {
        return await this.RequestClient.get(`/agents/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Agents };