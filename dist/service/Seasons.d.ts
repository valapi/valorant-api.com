import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceSeasons {
    uuid: string;
    displayName: string;
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
    private AxiosClient;
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceSeasons[]>>;
    getCompetitiveSeasons(): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceSeasons>>;
    getCompetitiveSeasonByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons>>;
}
export { Seasons };
export type { ValAPIServiceSeasons, ValAPIServiceCompetitiveSeasons };
//# sourceMappingURL=Seasons.d.ts.map