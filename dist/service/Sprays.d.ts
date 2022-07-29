import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Sprays {
    interface SprayLevels {
        uuid: string;
        sprayLevel: number;
        displayName: ValAPIClient.Response<string>;
        displayIcon: string;
        assetPath: string;
    }
    interface Sprays {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        category: string;
        themeUuid: string;
        displayIcon: string;
        fullIcon: string;
        fullTransparentIcon: string;
        animationPng: string;
        animationGif: string;
        assetPath: string;
        levels: Array<Sprays.SprayLevels>;
    }
}
declare class Sprays {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Sprays.Sprays[]>>;
    getLevels(): Promise<ValAPIClient.Service<Sprays.SprayLevels[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Sprays.Sprays>>;
    getLevelByUuid(uuid: string): Promise<ValAPIClient.Service<Sprays.SprayLevels>>;
}
export { Sprays };
