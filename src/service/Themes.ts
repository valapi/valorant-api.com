//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceThemes {
    uuid: string;
    displayName: string; //localized
    displayIcon: string;
    storeFeaturedImage: string;
    assetPath: string;
}

//class

class Themes {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceThemes[]>> {
        return await this.AxiosClient.request('/themes');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceThemes>> {
        return await this.AxiosClient.request(`/themes/${uuid}`);
    }
}

//export

export { Themes };
export type { ValAPIServiceThemes };