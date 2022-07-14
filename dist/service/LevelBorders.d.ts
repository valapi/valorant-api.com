import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceLevelBorders {
    uuid: string;
    startingLevel: number;
    levelNumberAppearance: string;
    smallPlayerCardAppearance: string;
    assetPath: string;
}
declare class LevelBorders {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceLevelBorders[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceLevelBorders>>;
}
export { LevelBorders };
export type { ValAPIServiceLevelBorders };
