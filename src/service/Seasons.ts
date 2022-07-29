//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Seasons {
    export interface Seasons {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        type: string;
        startTime: string | Date;
        endTime: string | Date;
        parentUuid: string;
        assetPath: string;
    }

    export interface CompetitiveSeasons {
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
}

//class

class Seasons {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Seasons.Seasons[]>> {
        return await this.RequestClient.get('/seasons' + `?language=${this.language}`);
    }

    public async getCompetitiveSeasons(): Promise<ValAPIClient.Service<Seasons.CompetitiveSeasons[]>> {
        return await this.RequestClient.get('/seasons/competitive');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Seasons.Seasons>> {
        return await this.RequestClient.get(`/seasons/${uuid}` + `?language=${this.language}`);
    }

    public async getCompetitiveSeasonByUuid(uuid: string): Promise<ValAPIClient.Service<Seasons.CompetitiveSeasons>> {
        return await this.RequestClient.get(`/seasons/competitive/${uuid}`);
    }
}

//export 

export { Seasons };