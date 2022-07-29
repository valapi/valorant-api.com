import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Buddies {
    interface BuddyLevels {
        uuid: string;
        charmLevel: number;
        displayName: ValAPIClient.Response<string>;
        displayIcon: string;
        assetPath: string;
    }
    interface Buddies {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        assetPath: string;
        levels: Array<Buddies.BuddyLevels>;
    }
}
declare class Buddies {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Buddies.Buddies[]>>;
    getLevels(): Promise<ValAPIClient.Service<Buddies.BuddyLevels[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Buddies.Buddies>>;
    getLevelByUuid(uuid: string): Promise<ValAPIClient.Service<Buddies.BuddyLevels>>;
}
export { Buddies };
