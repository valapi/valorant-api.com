//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceSeasons {
    uuid: string;
    displayName: string; //localized
    type: string;
    startTime: string | Date;
    endTime: string | Date;
    parentUuid: string;
    assetPath: string;
}

interface ValAPIServiceCompetitiveSeasons {
    uuid: string;
    startTime: string | Date;
    endTime: string | Date;
    seasonUuid: string;
    competitiveTiersUuid: string;
    borders: Array<{
        uuid: string;
        level: number;
        winsRequired: number;
        displayIcon: string;
        smallIcon: string;
        assetPath: string;
    }>;
    assetPath: string;
}

//class

class Seasons {
    private AxiosClient: AxiosClient;
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceSeasons[]>> {
        return await this.AxiosClient.request('/seasons' + `?language=${this.language}`);
    }

    public async getCompetitiveSeasons(): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons[]>> {
        return await this.AxiosClient.request('/seasons/competitive');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceSeasons>> {
        return await this.AxiosClient.request(`/seasons/${uuid}` + `?language=${this.language}`);
    }

    public async getCompetitiveSeasonByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons>> {
        return await this.AxiosClient.request(`/seasons/competitive/${uuid}`);
    }
}

//export 

export { Seasons };
export type { ValAPIServiceSeasons, ValAPIServiceCompetitiveSeasons };