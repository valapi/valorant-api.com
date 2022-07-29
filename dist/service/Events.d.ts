import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Events {
    interface Events {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        shortDisplayName: ValAPIClient.Response<string>;
        startTime: string | Date;
        endTime: string | Date;
        assetPath: string;
    }
}
declare class Events {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Events.Events[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Events.Events>>;
}
export { Events };
