import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Seasons {
    interface Seasons {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        type: string;
        startTime: string | Date;
        endTime: string | Date;
        parentUuid: string;
        assetPath: string;
    }
    interface CompetitiveSeasons {
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
}
declare class Seasons {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Seasons.Seasons[]>>;
    getCompetitiveSeasons(): Promise<ValAPIClient.Service<Seasons.CompetitiveSeasons[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Seasons.Seasons>>;
    getCompetitiveSeasonByUuid(uuid: string): Promise<ValAPIClient.Service<Seasons.CompetitiveSeasons>>;
}
export { Seasons };
