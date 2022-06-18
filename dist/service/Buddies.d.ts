import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServiceBuddyLevels {
    uuid: string;
    charmLevel: number;
    displayName: ValAPIResponse<string>;
    displayIcon: string;
    assetPath: string;
}
interface ValAPIServiceBuddies {
    uuid: string;
    displayName: ValAPIResponse<string>;
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    assetPath: string;
    levels: Array<ValAPIServiceBuddyLevels>;
}
declare class Buddies {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceBuddies[]>>;
    getLevels(): Promise<ValAPIClientService<ValAPIServiceBuddyLevels[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceBuddies>>;
    getLevelByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceBuddyLevels>>;
}
export { Buddies };
export type { ValAPIServiceBuddies, ValAPIServiceBuddyLevels };
//# sourceMappingURL=Buddies.d.ts.map