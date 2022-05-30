import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceEvents {
    uuid: string;
    displayName: string;
    shortDisplayName: string;
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
//# sourceMappingURL=Events.d.ts.map