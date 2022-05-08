//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceCompetitiveTiers {
    uuid: string;
    assetObjectName: string;
    tiers: Array<{
        tier: number;
        tierName: string; //localized
        division: string;
        divisionName: string; //localized
        color: string;
        backgroundColor: string;
        smallIcon: string;
        largeIcon: string;
        rankTriangleDownIcon: string;
        rankTriangleUpIcon: string;
    }>;
    assetPath: string;
}

//class

class CompetitiveTiers {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers[]>> {
        return await this.AxiosClient.request('/competitivetiers');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers>> {
        return await this.AxiosClient.request(`/competitivetiers/${uuid}`);
    }
}

//export

export { CompetitiveTiers };
export type { ValAPIServiceCompetitiveTiers };