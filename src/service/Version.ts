//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Version {
    export interface Version {
        manifestId: string;
        branch: string;
        version: string;
        buildVersion: string;
        engineVersion: string;
        riotClientVersion: string;
        buildDate: string | Date;
    }
}

//class

class Version {
    private RequestClient: ValRequestClient;

    public constructor(RequestClient: ValRequestClient) {
        this.RequestClient = RequestClient;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Version.Version>> {
        return await this.RequestClient.get('/version');
    }
}

//export 

export { Version };