import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace LevelBorders {
    interface LevelBorders {
        uuid: string;
        startingLevel: number;
        levelNumberAppearance: string;
        smallPlayerCardAppearance: string;
        assetPath: string;
    }
}
declare class LevelBorders {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<LevelBorders.LevelBorders[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<LevelBorders.LevelBorders>>;
}
export { LevelBorders };
