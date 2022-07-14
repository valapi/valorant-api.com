import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServiceEvents {
    uuid: string;
    displayName: ValAPIResponse<string>;
    shortDisplayName: ValAPIResponse<string>;
    startTime: string | Date;
    endTime: string | Date;
    assetPath: string;
}
declare class Events {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceEvents[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceEvents>>;
}
export { Events };
export type { ValAPIServiceEvents };
