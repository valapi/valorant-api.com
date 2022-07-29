import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Version {
    interface Version {
        manifestId: string;
        branch: string;
        version: string;
        buildVersion: string;
        engineVersion: string;
        riotClientVersion: string;
        buildDate: string | Date;
    }
}
declare class Version {
    private RequestClient;
    constructor(RequestClient: ValRequestClient);
    get(): Promise<ValAPIClient.Service<Version.Version>>;
}
export { Version };
