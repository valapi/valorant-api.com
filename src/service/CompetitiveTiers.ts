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
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers[]>> {
        return await this.AxiosClient.request('/competitivetiers' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers>> {
        return await this.AxiosClient.request(`/competitivetiers/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { CompetitiveTiers };
export type { ValAPIServiceCompetitiveTiers };