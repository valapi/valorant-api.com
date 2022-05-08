import type { AxiosClient } from "../client/AxiosClient";
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
    private AxiosClient;
    constructor(AxiosClient: AxiosClient);
    get(): Promise<ValAPIClientService<ValAPIServiceVersion>>;
}
export { Version };
export type { ValAPIServiceVersion };
//# sourceMappingURL=Version.d.ts.map