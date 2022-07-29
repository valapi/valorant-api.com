import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Currencies {
    interface Currencies {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        displayNameSingular: ValAPIClient.Response<string>;
        displayIcon: string;
        largeIcon: string;
        assetPath: string;
    }
}
declare class Currencies {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Currencies.Currencies[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Currencies.Currencies>>;
}
export { Currencies };
