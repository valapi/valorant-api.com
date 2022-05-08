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

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServicePlayerTitles[]>> {
        return await this.AxiosClient.request('/playertitles');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerTitles>> {
        return await this.AxiosClient.request(`/playertitles/${uuid}`);
    }
}

//export

export { PlayerTitles };
export type { ValAPIServicePlayerTitles };