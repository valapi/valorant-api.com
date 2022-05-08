import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceBuddyLevels {
    uuid: string;
    charmLevel: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
}
interface ValAPIServiceBuddies {
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    assetPath: string;
    levels: Array<ValAPIServiceBuddyLevels>;
}
declare class Buddies {
    private AxiosClient;
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceBuddies[]>>;
    getLevels(): Promise<ValAPIClientService<ValAPIServiceBuddyLevels[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceBuddies>>;
    getLevelsByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceBuddyLevels>>;
}
export { Buddies };
export type { ValAPIServiceBuddies, ValAPIServiceBuddyLevels };
//# sourceMappingURL=Buddies.d.ts.map