//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceCompetitiveTiers {
    uuid: string;
    assetObjectName: string;
    tiers: Array<{
        tier: number;
        tierName: ValAPIResponse<string>; //localized
        division: string;
        divisionName: ValAPIResponse<string>; //localized
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
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers[]>> {
        return await this.RequestClient.get('/competitivetiers' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveTiers>> {
        return await this.RequestClient.get(`/competitivetiers/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { CompetitiveTiers };
export type { ValAPIServiceCompetitiveTiers };