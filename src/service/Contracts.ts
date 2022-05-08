//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceContracts {
    uuid: string;
    displayName: string; //localized
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
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceContracts[]>> {
        return await this.AxiosClient.request('/contracts');
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceContracts>> {
        return await this.AxiosClient.request(`/contracts/${uuid}`);
    }
}

//export

export { Contracts };
export type { ValAPIServiceContracts };