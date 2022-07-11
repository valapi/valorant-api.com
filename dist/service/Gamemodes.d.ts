import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServiceGamemodes {
    uuid: string;
    displayName: ValAPIResponse<string>;
    duration: ValAPIResponse<string>;
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
    displayName: ValAPIResponse<string>;
    category: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
}
declare class Gamemodes {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceGamemodes[]>>;
    getEquippables(): Promise<ValAPIClientService<ValAPIServiceGamemodeEquippables[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceGamemodes>>;
    getEquippableByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceGamemodeEquippables>>;
}
export { Gamemodes };
export type { ValAPIServiceGamemodes, ValAPIServiceGamemodeEquippables };
//# sourceMappingURL=Gamemodes.d.ts.map