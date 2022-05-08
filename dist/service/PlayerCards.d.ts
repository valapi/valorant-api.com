import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServicePlayerCards {
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    smallArt: string;
    wideArt: string;
    largeArt: string;
    assetPath: string;
}
declare class PlayerCards {
    private AxiosClient;
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServicePlayerCards[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerCards>>;
}
export { PlayerCards };
export type { ValAPIServicePlayerCards };
//# sourceMappingURL=PlayerCards.d.ts.map