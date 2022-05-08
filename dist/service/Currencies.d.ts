import type { AxiosClient } from "../client/AxiosClient";
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
    private AxiosClient;
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceCurrencies[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCurrencies>>;
}
export { Currencies };
export type { ValAPIServiceCurrencies };
//# sourceMappingURL=Currencies.d.ts.map