import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceCeremonies {
    uuid: string;
    displayName: string;
    assetPath: string;
}
declare class Ceremonies {
    private AxiosClient;
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceCeremonies[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCeremonies>>;
}
export { Ceremonies };
export type { ValAPIServiceCeremonies };
//# sourceMappingURL=Ceremonies.d.ts.map