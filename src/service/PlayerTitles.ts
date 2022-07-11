//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface
//unknown from website

interface ValAPIServicePlayerTitles {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    titleText: ValAPIResponse<string>; //localized
    isHiddenIfNotOwned: boolean;
    assetPath: string;
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

    public async get(): Promise<ValAPIClientService<ValAPIServicePlayerTitles[]>> {
        return await this.RequestClient.get('/playertitles' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerTitles>> {
        return await this.RequestClient.get(`/playertitles/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { PlayerTitles };
export type { ValAPIServicePlayerTitles };