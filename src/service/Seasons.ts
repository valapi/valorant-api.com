//import

import type { ValRequestClient } from "@valapi/lib";
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
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceSeasons[]>> {
        return await this.RequestClient.get('/seasons' + `?language=${this.language}`);
    }

    public async getCompetitiveSeasons(): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons[]>> {
        return await this.RequestClient.get('/seasons/competitive');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceSeasons>> {
        return await this.RequestClient.get(`/seasons/${uuid}` + `?language=${this.language}`);
    }

    public async getCompetitiveSeasonByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceCompetitiveSeasons>> {
        return await this.RequestClient.get(`/seasons/competitive/${uuid}`);
    }
}

//export 

export { Seasons };
export type { ValAPIServiceSeasons, ValAPIServiceCompetitiveSeasons };