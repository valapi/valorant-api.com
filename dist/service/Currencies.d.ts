import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceCurrencies {
    uuid: string;
    displayName: string;
    displayNameSingular: string;
    displayIcon: string;
    largeIcon: string;
    assetPath: string;
}
declare class Currencies {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceCurrencies[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCurrencies>>;
}
export { Currencies };
export type { ValAPIServiceCurrencies };
//# sourceMappingURL=Currencies.d.ts.map