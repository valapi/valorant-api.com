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

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceEvents[]>> {
        return await this.AxiosClient.request('/events');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceEvents>> {
        return await this.AxiosClient.request(`/events/${uuid}`);
    }
}

//export

export { Events };
export type { ValAPIServiceEvents };