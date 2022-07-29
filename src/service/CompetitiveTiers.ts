//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace CompetitiveTiers {
    export interface CompetitiveTiers {
        uuid: string;
        assetObjectName: string;
        tiers: Array<{
            tier: number;
            tierName: ValAPIClient.Response<string>; //localized
            division: string;
            divisionName: ValAPIClient.Response<string>; //localized
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

//class

class CompetitiveTiers {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<CompetitiveTiers.CompetitiveTiers[]>> {
        return await this.RequestClient.get('/competitivetiers' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<CompetitiveTiers.CompetitiveTiers>> {
        return await this.RequestClient.get(`/competitivetiers/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { CompetitiveTiers };