import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Ceremonies {
    interface Ceremonies {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        assetPath: string;
    }
}
declare class Ceremonies {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Ceremonies.Ceremonies[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Ceremonies.Ceremonies>>;
}
export { Ceremonies };
