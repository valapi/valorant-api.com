import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServiceThemes {
    uuid: string;
    displayName: ValAPIResponse<string>;
    displayIcon: string;
    storeFeaturedImage: string;
    assetPath: string;
}
declare class Themes {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceThemes[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceThemes>>;
}
export { Themes };
export type { ValAPIServiceThemes };
