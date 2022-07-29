import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Themes {
    interface Themes {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        displayIcon: string;
        storeFeaturedImage: string;
        assetPath: string;
    }
}
declare class Themes {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Themes.Themes[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Themes.Themes>>;
}
export { Themes };
