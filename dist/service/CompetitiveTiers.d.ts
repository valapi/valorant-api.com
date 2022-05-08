import type { AxiosClient } from "../client/AxiosClient";
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
    private AxiosClient;
    constructor(AxiosClient: AxiosClient);
    get(): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers>>;
}
export { CompetitiveTiers };
export type { ValAPIServiceCompetitiveTiers };
//# sourceMappingURL=CompetitiveTiers.d.ts.map