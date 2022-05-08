//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceEvents {
    uuid: string;
    displayName: string; //localized
    shortDisplayName: string; //localized
    startTime: string | Date;
    endTime: string | Date;
    assetPath: string;
}

//class

class Events {
    private AxiosClient: AxiosClient;
    private language: string;

    constructor(AxiosClient: AxiosClient, language: string) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceEvents[]>> {
        return await this.AxiosClient.request('/events' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceEvents>> {
        return await this.AxiosClient.request(`/events/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Events };
export type { ValAPIServiceEvents };