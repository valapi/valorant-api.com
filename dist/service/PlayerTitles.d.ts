import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace PlayerTitles {
    interface PlayerTitles {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        titleText: ValAPIClient.Response<string>;
        isHiddenIfNotOwned: boolean;
        assetPath: string;
    }
}
declare class PlayerTitles {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<PlayerTitles.PlayerTitles[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<PlayerTitles.PlayerTitles>>;
}
export { PlayerTitles };
