import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServicePlayerTitles {
    uuid: string;
    displayName: ValAPIResponse<string>;
    titleText: ValAPIResponse<string>;
    isHiddenIfNotOwned: boolean;
    assetPath: string;
}
declare class PlayerTitles {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServicePlayerTitles[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerTitles>>;
}
export { PlayerTitles };
export type { ValAPIServicePlayerTitles };
