import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceGamemodes {
    uuid: string;
    displayName: string;
    duration: number;
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
    displayName: string;
    category: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
}
declare class Gamemodes {
    private AxiosClient;
    constructor(AxiosClient: AxiosClient);
    get(): Promise<ValAPIClientService<ValAPIServiceGamemodes[]>>;
    getEquippables(): Promise<ValAPIClientService<ValAPIServiceGamemodeEquippables[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceGamemodes>>;
    getEquippableByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceGamemodeEquippables>>;
}
export { Gamemodes };
export type { ValAPIServiceGamemodes, ValAPIServiceGamemodeEquippables };
//# sourceMappingURL=Gamemodes.d.ts.map