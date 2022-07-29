//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Events {
    export interface Events {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        shortDisplayName: ValAPIClient.Response<string>; //localized
        startTime: string | Date;
        endTime: string | Date;
        assetPath: string;
    }
}

//class

class Events {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Events.Events[]>> {
        return await this.RequestClient.get('/events' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Events.Events>> {
        return await this.RequestClient.get(`/events/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Events };