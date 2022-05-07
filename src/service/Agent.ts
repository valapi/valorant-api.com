//import
import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIClient_Agent {
    uuid: string,
    displayName: string, //localized
    description: string, //localized
    developerName: string
    characterTags: Array<string>, //localized
    displayIcon: string,
    displayIconSmall: string,
    bustPortrait: string,
    fullPortrait: string,
    fullPortraitV2: string,
    killfeedPortrait: string,
    background: string,
    backgroundGradientColors: Array<string>,
    assetPath: string,
    isFullPortraitRightFacing: boolean,
    isPlayableCharacter: boolean,
    isAvailableForTest: boolean,
    isBaseContent: boolean,
    role: {
        uuid: string,
        displayName: string, //localized
        description: string, //localized
        displayIcon: string,
        assetPath: string,
    },
    abilities: Array<{
        slot: string,
        displayName: string, //localized
        description: string, //localized
        displayIcon: string,
    }>,
    voiceLines: {
        minDuration: number,
        maxDuration: number,
        mediaList: Array<{
            id: number,
            wwise: string
            wave: string,
        }>
    }
}

//class
class Agent {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get():Promise<ValAPIClientService<Array<ValAPIClient_Agent>>> {
        const response = await this.AxiosClient.request(`/agents`);

        return {
            isError: response.isError,
            status: Number(response.data?.status),
            data: response.data?.data,
        }
    }

    public async getByUUID(uuid:string):Promise<ValAPIClientService<ValAPIClient_Agent>> {
        const response = await this.AxiosClient.request(`/agents/${uuid}`);

        return {
            isError: response.isError,
            status: Number(response.data?.status),
            data: response.data?.data,
        }
    }
}

//export
export { Agent };
export type { ValAPIClient_Agent };