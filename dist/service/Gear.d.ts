import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceGear {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
    shopData: {
        cost: number;
        category: string;
        categoryText: string;
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
    private AxiosClient;
    constructor(AxiosClient: AxiosClient);
    get(): Promise<ValAPIClientService<ValAPIServiceGear[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceGear>>;
}
export { Gear };
export type { ValAPIServiceGear };
//# sourceMappingURL=Gear.d.ts.map