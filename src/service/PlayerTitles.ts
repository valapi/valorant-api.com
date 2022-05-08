//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface
//unknown from website

interface ValAPIServicePlayerTitles {
    uuid: string;
    displayName: string;
    titleText: string;
    isHiddenIfNotOwned: boolean;
    assetPath: string;
}

//class

class PlayerTitles {
    private AxiosClient: AxiosClient;
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServicePlayerTitles[]>> {
        return await this.AxiosClient.request('/playertitles' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerTitles>> {
        return await this.AxiosClient.request(`/playertitles/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { PlayerTitles };
export type { ValAPIServicePlayerTitles };