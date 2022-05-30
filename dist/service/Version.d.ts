import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceVersion {
    manifestId: string;
    branch: string;
    version: string;
    buildVersion: string;
    engineVersion: string;
    riotClientVersion: string;
    buildDate: string | Date;
}
declare class Version {
    private RequestClient;
    constructor(RequestClient: ValRequestClient);
    get(): Promise<ValAPIClientService<ValAPIServiceVersion>>;
}
export { Version };
export type { ValAPIServiceVersion };
//# sourceMappingURL=Version.d.ts.map