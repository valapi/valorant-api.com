import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";
interface ValAPIServiceContentTiers {
    uuid: string;
    devName: string;
    rank: number;
    juiceValue: number;
    juiceCost: number;
    highlightColor: string;
    displayIcon: string;
    assetPath: string;
}
declare class ContentTiers {
    private AxiosClient;
    private language;
    constructor(AxiosClient: AxiosClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceContentTiers[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceContentTiers>>;
}
export { ContentTiers };
export type { ValAPIServiceContentTiers };
//# sourceMappingURL=ContentTiers.d.ts.map