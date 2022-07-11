//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface
//unknown from website

interface ValAPIServicePlayerCards {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    smallArt: string;
    wideArt: string;
    largeArt: string;
    assetPath: string;
}

//class

class PlayerCards {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServicePlayerCards[]>> {
        return await this.RequestClient.get('/playercards' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServicePlayerCards>> {
        return await this.RequestClient.get(`/playercards/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { PlayerCards };
export type { ValAPIServicePlayerCards };