//import

import type { ValRequestClient } from "@valapi/lib";
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
    private RequestClient: ValRequestClient;

    public constructor(RequestClient: ValRequestClient) {
        this.RequestClient = RequestClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceVersion>> {
        return await this.RequestClient.get('/version');
    }
}

//export 

export { Version };
export type { ValAPIServiceVersion };