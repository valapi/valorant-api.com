import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Gamemodes {
    interface Gamemodes {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        duration: ValAPIClient.Response<string>;
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
    interface GamemodeEquippables {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        category: string;
        displayIcon: string;
        killStreamIcon: string;
        assetPath: string;
    }
}
declare class Gamemodes {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Gamemodes.Gamemodes[]>>;
    getEquippables(): Promise<ValAPIClient.Service<Gamemodes.GamemodeEquippables[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Gamemodes.Gamemodes>>;
    getEquippableByUuid(uuid: string): Promise<ValAPIClient.Service<Gamemodes.GamemodeEquippables>>;
}
export { Gamemodes };
