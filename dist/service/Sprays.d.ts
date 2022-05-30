import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceSprayLevels {
    uuid: string;
    sprayLevel: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
}
interface ValAPIServiceSprays {
    uuid: string;
    displayName: string;
    category: string;
    themeUuid: string;
    displayIcon: string;
    fullIcon: string;
    fullTransparentIcon: string;
    animationPng: string;
    animationGif: string;
    assetPath: string;
    levels: Array<ValAPIServiceSprayLevels>;
}
declare class Sprays {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceSprays[]>>;
    getLevels(): Promise<ValAPIClientService<ValAPIServiceSprayLevels[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceSprays>>;
    getLevelByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceSprayLevels>>;
}
export { Sprays };
export type { ValAPIServiceSprays, ValAPIServiceSprayLevels };
//# sourceMappingURL=Sprays.d.ts.map