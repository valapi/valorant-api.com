import { ValEvent, type ValorantApiError, ValorantApiRequestResponse, ValorantApiRequestData } from "@valapi/lib";
import { Locale } from "@valapi/lib";
import type { AxiosRequestConfig } from "axios";
import { Agents } from "../service/Agents";
import { Buddies } from "../service/Buddies";
import { Bundles } from "../service/Bundles";
import { Ceremonies } from "../service/Ceremonies";
import { CompetitiveTiers } from "../service/CompetitiveTiers";
import { ContentTiers } from "../service/ContentTiers";
import { Contracts } from "../service/Contracts";
import { Currencies } from "../service/Currencies";
import { Events } from "../service/Events";
import { Gamemodes } from "../service/Gamemodes";
import { Gear } from "../service/Gear";
import { Maps } from "../service/Maps";
import { PlayerCards } from "../service/PlayerCards";
import { PlayerTitles } from "../service/PlayerTitles";
import { Seasons } from "../service/Seasons";
import { Sprays } from "../service/Sprays";
import { Themes } from "../service/Themes";
import { Version } from "../service/Version";
import { Weapons } from "../service/Weapons";
declare type ValAPIClientService<ValAPIClientServiceReturn> = ValorantApiRequestResponse<{
    status: number;
    error?: string;
    data?: ValAPIClientServiceReturn;
}>;
declare type ValAPIConfigLanguage = keyof typeof Locale.from;
interface ValAPIConfig {
    language?: ValAPIConfigLanguage;
    axiosConfig?: AxiosRequestConfig;
}
declare class APIClient extends ValEvent {
    protected config: ValAPIConfig;
    private RequestClient;
    Agents: Agents;
    Buddies: Buddies;
    Bundles: Bundles;
    Ceremonies: Ceremonies;
    CompetitiveTiers: CompetitiveTiers;
    ContentTiers: ContentTiers;
    Contracts: Contracts;
    Currencies: Currencies;
    Events: Events;
    Gamemodes: Gamemodes;
    Gear: Gear;
    Maps: Maps;
    PlayerCards: PlayerCards;
    PlayerTitles: PlayerTitles;
    Seasons: Seasons;
    Sprays: Sprays;
    Themes: Themes;
    Version: Version;
    Weapons: Weapons;
    constructor(config?: ValAPIConfig);
    private reload;
    setLanguage(language: ValAPIConfigLanguage): void;
}
interface ValAPIClientEvent {
    'ready': () => void;
    'request': (data: ValorantApiRequestData) => void;
    'changeSettings': (data: {
        name: string;
        data: any;
    }) => void;
    'error': (data: ValorantApiError) => void;
}
declare interface APIClient {
    emit<EventName extends keyof ValAPIClientEvent>(name: EventName, ...args: Parameters<ValAPIClientEvent[EventName]>): void;
    on<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    once<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    off<EventName extends keyof ValAPIClientEvent>(name: EventName, callback?: ValAPIClientEvent[EventName]): void;
}
export { APIClient };
export type { ValAPIConfig, ValAPIClientEvent, ValAPIClientService };
//# sourceMappingURL=Client.d.ts.map