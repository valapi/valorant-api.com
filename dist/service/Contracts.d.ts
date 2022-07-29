import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Contracts {
    interface Contracts {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        displayIcon: string;
        shipIt: boolean;
        freeRewardScheduleUuid: string;
        content: {
            relationType: string;
            relationUuid: string;
            chapters: Array<{
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
}
declare class Contracts {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Contracts.Contracts[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Contracts.Contracts>>;
}
export { Contracts };
