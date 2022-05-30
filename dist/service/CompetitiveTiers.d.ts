import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceCompetitiveTiers {
    uuid: string;
    assetObjectName: string;
    tiers: Array<{
        tier: number;
        tierName: string;
        division: string;
        divisionName: string;
        color: string;
        backgroundColor: string;
        smallIcon: string;
        largeIcon: string;
        rankTriangleDownIcon: string;
        rankTriangleUpIcon: string;
    }>;
    assetPath: string;
}
declare class CompetitiveTiers {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers>>;
}
export { CompetitiveTiers };
export type { ValAPIServiceCompetitiveTiers };
//# sourceMappingURL=CompetitiveTiers.d.ts.map