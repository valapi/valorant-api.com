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
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get():Promise<ValAPIClientService<ValAPIServiceContracts[]>> {
        return await this.AxiosClient.request('/contracts' + `?language=${this.language}`);
    }

    public async getByUuid(uuid:string):Promise<ValAPIClientService<ValAPIServiceContracts>> {
        return await this.AxiosClient.request(`/contracts/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Contracts };
export type { ValAPIServiceContracts };