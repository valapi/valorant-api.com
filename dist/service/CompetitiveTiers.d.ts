import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace CompetitiveTiers {
    interface CompetitiveTiers {
        uuid: string;
        assetObjectName: string;
        tiers: Array<{
            tier: number;
            tierName: ValAPIClient.Response<string>;
            division: string;
            divisionName: ValAPIClient.Response<string>;
            color: string;
            backgroundColor: string;
            smallIcon: string;
            largeIcon: string;
            rankTriangleDownIcon: string;
            rankTriangleUpIcon: string;
        }>;
        assetPath: string;
    }
}
declare class CompetitiveTiers {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<CompetitiveTiers.CompetitiveTiers[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<CompetitiveTiers.CompetitiveTiers>>;
}
export { CompetitiveTiers };
