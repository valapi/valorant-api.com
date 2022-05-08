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
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServicePlayerCards[]>> {
        return await this.AxiosClient.request('/playercards' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerCards>> {
        return await this.AxiosClient.request(`/playercards/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { PlayerCards };
export type { ValAPIServicePlayerCards };