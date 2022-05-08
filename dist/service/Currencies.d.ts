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
    constructor(AxiosClient: AxiosClient);
    get(): Promise<ValAPIClientService<ValAPIServiceCurrencies[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCurrencies>>;
}
export { Currencies };
export type { ValAPIServiceCurrencies };
//# sourceMappingURL=Currencies.d.ts.map