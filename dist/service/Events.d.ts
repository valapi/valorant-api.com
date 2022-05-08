import type { AxiosClient } from "../client/AxiosClient";
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
    private AxiosClient;
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceEvents[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceEvents>>;
}
export { Events };
export type { ValAPIServiceEvents };
//# sourceMappingURL=Events.d.ts.map