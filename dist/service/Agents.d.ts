import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Agents {
    interface Agents {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        description: ValAPIClient.Response<string>;
        developerName: string;
        characterTags: ValAPIClient.Response<Array<string>>;
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
            displayName: ValAPIClient.Response<string>;
            description: ValAPIClient.Response<string>;
            displayIcon: string;
            assetPath: string;
        };
        abilities: Array<{
            slot: string;
            displayName: ValAPIClient.Response<string>;
            description: ValAPIClient.Response<string>;
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
declare class Agents {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(isPlayableCharacter?: boolean): Promise<ValAPIClient.Service<Agents.Agents[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Agents.Agents>>;
}
export { Agents };
