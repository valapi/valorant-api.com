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

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceSeasons[]>> {
        return await this.AxiosClient.request('/seasons');
    }

    public async getCompetitiveSeasons(): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons[]>> {
        return await this.AxiosClient.request('/seasons/competitive');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceSeasons>> {
        return await this.AxiosClient.request(`/seasons/${uuid}`);
    }

    public async getCompetitiveSeasonsByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons>> {
        return await this.AxiosClient.request(`/seasons/competitive/${uuid}`);
    }
}

//export 

export { Seasons };
export type { ValAPIServiceSeasons, ValAPIServiceCompetitiveSeasons };