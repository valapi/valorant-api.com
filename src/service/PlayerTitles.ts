//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface
//unknown from website

namespace PlayerTitles {
    export interface PlayerTitles {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        titleText: ValAPIClient.Response<string>; //localized
        isHiddenIfNotOwned: boolean;
        assetPath: string;
    }
}

//class

class PlayerTitles {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<PlayerTitles.PlayerTitles[]>> {
        return await this.RequestClient.get('/playertitles' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<PlayerTitles.PlayerTitles>> {
        return await this.RequestClient.get(`/playertitles/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { PlayerTitles };