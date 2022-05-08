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
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceThemes[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceThemes>>;
}
export { Themes };
export type { ValAPIServiceThemes };
//# sourceMappingURL=Themes.d.ts.map