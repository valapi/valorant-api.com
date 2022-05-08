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
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceThemes[]>> {
        return await this.AxiosClient.request('/themes' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceThemes>> {
        return await this.AxiosClient.request(`/themes/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Themes };
export type { ValAPIServiceThemes };