import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace PlayerCards {
    interface PlayerCards {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        smallArt: string;
        wideArt: string;
        largeArt: string;
        assetPath: string;
    }
}
declare class PlayerCards {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<PlayerCards.PlayerCards[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<PlayerCards.PlayerCards>>;
}
export { PlayerCards };
