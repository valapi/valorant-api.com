import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceThemes {
    uuid: string;
    displayName: string;
    displayIcon: string;
    storeFeaturedImage: string;
    assetPath: string;
}
declare class Themes {
    private AxiosClient;
    constructor(AxiosClient: AxiosClient);
    get(): Promise<ValAPIClientService<ValAPIServiceThemes[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceThemes>>;
}
export { Themes };
export type { ValAPIServiceThemes };
//# sourceMappingURL=Themes.d.ts.map