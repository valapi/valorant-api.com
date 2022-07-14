import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServiceSeasons {
    uuid: string;
    displayName: ValAPIResponse<string>;
    type: string;
    startTime: string | Date;
    endTime: string | Date;
    parentUuid: string;
    assetPath: string;
}
interface ValAPIServiceCompetitiveSeasons {
    uuid: string;
    startTime: string | Date;
    endTime: string | Date;
    seasonUuid: string;
    competitiveTiersUuid: string;
    borders: Array<{
        uuid: string;
        level: number;
        winsRequired: number;
        displayIcon: string;
        smallIcon: string;
        assetPath: string;
    }>;
    assetPath: string;
}
declare class Seasons {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceSeasons[]>>;
    getCompetitiveSeasons(): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceSeasons>>;
    getCompetitiveSeasonByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons>>;
}
export { Seasons };
export type { ValAPIServiceSeasons, ValAPIServiceCompetitiveSeasons };
