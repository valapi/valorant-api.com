import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServicePlayerTitles {
    uuid: string;
    displayName: string;
    titleText: string;
    isHiddenIfNotOwned: boolean;
    assetPath: string;
}
declare class PlayerTitles {
    private AxiosClient;
    constructor(AxiosClient: AxiosClient);
    get(): Promise<ValAPIClientService<ValAPIServicePlayerTitles[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerTitles>>;
}
export { PlayerTitles };
export type { ValAPIServicePlayerTitles };
//# sourceMappingURL=PlayerTitles.d.ts.map