import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServicePlayerCards {
    uuid: string;
    displayName: ValAPIResponse<string>;
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    smallArt: string;
    wideArt: string;
    largeArt: string;
    assetPath: string;
}
declare class PlayerCards {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServicePlayerCards[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerCards>>;
}
export { PlayerCards };
export type { ValAPIServicePlayerCards };
