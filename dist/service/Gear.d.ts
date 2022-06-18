import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServiceGear {
    uuid: string;
    displayName: ValAPIResponse<string>;
    description: ValAPIResponse<string>;
    displayIcon: string;
    assetPath: string;
    shopData: {
        cost: number;
        category: string;
        categoryText: ValAPIResponse<string>;
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
declare class Gear {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceGear[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceGear>>;
}
export { Gear };
export type { ValAPIServiceGear };
//# sourceMappingURL=Gear.d.ts.map