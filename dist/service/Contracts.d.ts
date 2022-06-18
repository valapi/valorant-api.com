import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServiceContracts {
    uuid: string;
    displayName: ValAPIResponse<string>;
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
declare class Contracts {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceContracts[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceContracts>>;
}
export { Contracts };
export type { ValAPIServiceContracts };
//# sourceMappingURL=Contracts.d.ts.map