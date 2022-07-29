import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Gear {
    interface Gear {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        description: ValAPIClient.Response<string>;
        displayIcon: string;
        assetPath: string;
        shopData: {
            cost: number;
            category: string;
            categoryText: ValAPIClient.Response<string>;
            gridPosition: {
                row: number;
                column: number;
            };
            canBeTrashed: boolean;
            image: string;
            newImage: string;
            newImage2: string;
            assetPath: string;
        };
    }
}
declare class Gear {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Gear.Gear[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Gear.Gear>>;
}
export { Gear };
