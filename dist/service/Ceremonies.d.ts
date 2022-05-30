import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceCeremonies {
    uuid: string;
    displayName: string;
    assetPath: string;
}
declare class Ceremonies {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceCeremonies[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCeremonies>>;
}
export { Ceremonies };
export type { ValAPIServiceCeremonies };
//# sourceMappingURL=Ceremonies.d.ts.map