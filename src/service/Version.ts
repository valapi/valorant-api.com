//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceVersion {
    manifestId: string;
    branch: string;
    version: string;
    buildVersion: string;
    engineVersion: string;
    riotClientVersion: string;
    buildDate: string | Date;
}

//class

class Version {
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceVersion>> {
        return await this.AxiosClient.request('/version');
    }
}

//export 

export { Version };
export type { ValAPIServiceVersion };