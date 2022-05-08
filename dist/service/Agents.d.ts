import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceAgents {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: Array<string>;
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
        displayName: string;
        description: string;
        displayIcon: string;
        assetPath: string;
    };
    abilities: Array<{
        slot: string;
        displayName: string;
        description: string;
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
declare class Agents {
    private AxiosClient;
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(isPlayableCharacter?: boolean): Promise<ValAPIClientService<ValAPIServiceAgents[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceAgents>>;
}
export { Agents };
export type { ValAPIServiceAgents };
//# sourceMappingURL=Agents.d.ts.map