import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace ContentTiers {
    interface ContentTiers {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        devName: string;
        rank: number;
        juiceValue: number;
        juiceCost: number;
        highlightColor: string;
        displayIcon: string;
        assetPath: string;
    }
}
declare class ContentTiers {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<ContentTiers.ContentTiers[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<ContentTiers.ContentTiers>>;
}
export { ContentTiers };
