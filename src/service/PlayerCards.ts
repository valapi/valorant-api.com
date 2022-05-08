//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface
//unknown from website

interface ValAPIServicePlayerCards {
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    smallArt: string;
    wideArt: string;
    largeArt: string;
    assetPath: string;
}

//class

class PlayerCards {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServicePlayerCards[]>> {
        return await this.AxiosClient.request('/playercards');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerCards>> {
        return await this.AxiosClient.request(`/playercards/${uuid}`);
    }
}

//export

export { PlayerCards };
export type { ValAPIServicePlayerCards };