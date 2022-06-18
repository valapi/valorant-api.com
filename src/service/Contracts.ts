//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceContracts {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    displayIcon: string;
    shipIt: boolean;
    freeRewardScheduleUuid: string;
    content: {
        relationType: string;
        relationUuid: string;
        chapters:Array<{
            isEpilogue: boolean;
            levels: Array<{
                reward: {
                    type: string;
                    uuid: string;
                    amount: number;
                    isHighlighted: boolean;
                };
                xp: number;
                vpCost: number;
                isPurchasableWithVP: boolean;
            }>;
            freeRewards: Array<{
                type: string;
                uuid: string;
                amount: number;
                isHighlighted: boolean;
            }>;
        }>;
        premiumRewardScheduleUuid: string;
        premiumVPCost: number;
    };
    assetPath: string;
}

//class

class Contracts {
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceContracts[]>> {
        return await this.RequestClient.get('/contracts' + `?language=${this.language}`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceContracts>> {
        return await this.RequestClient.get(`/contracts/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Contracts };
export type { ValAPIServiceContracts };