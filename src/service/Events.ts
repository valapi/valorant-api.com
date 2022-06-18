//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceEvents {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    shortDisplayName: ValAPIResponse<string>; //localized
    startTime: string | Date;
    endTime: string | Date;
    assetPath: string;
}

//class

class Events {
    private RequestClient: ValRequestClient;
    private language: string;

    constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceEvents[]>> {
        return await this.RequestClient.get('/events' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceEvents>> {
        return await this.RequestClient.get(`/events/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Events };
export type { ValAPIServiceEvents };