//import
import {
    ValEvent, type ValorantApiError, ValRequestClient, ValorantApiRequestResponse, ValorantApiRequestData,
    Locale, Region as _Region
} from "@valapi/lib";

import type { AxiosRequestConfig } from "axios";

//service

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


//interface

type ValAPIClientService<ValAPIClientServiceReturn> = ValorantApiRequestResponse<{
    status: number;
    error?: string;
    data?: ValAPIClientServiceReturn;
}>;

type ValAPIConfigLanguage = keyof typeof Locale.from | "all";

interface ValAPIConfig {
    language?: ValAPIConfigLanguage; //can use 'all' but not supported yet
    axiosConfig?: AxiosRequestConfig;
}

type ValAPIResponse<MyType> = {
    "ar-AE": MyType;
    "de-DE": MyType;
    "en-US": MyType;
    "es-ES": MyType;
    "es-MX": MyType;
    "fr-FR": MyType;
    "id-ID": MyType;
    "it-IT": MyType;
    "ja-JP": MyType;
    "ko-KR": MyType;
    "pl-PL": MyType;
    "pt-BR": MyType;
    "ru-RU": MyType;
    "th-TH": MyType;
    "tr-TR": MyType;
    "vi-VN": MyType;
    "zh-CN": MyType;
    "zh-TW": MyType;
} | MyType;

const _defaultConfig: ValAPIConfig = {
    language: 'en-US',
    axiosConfig: {
        baseURL: 'https://valorant-api.com/v1',
    },
}

//class
class APIClient extends ValEvent {
    protected config: ValAPIConfig;
    private RequestClient: ValRequestClient;

    //service

    public Agents: Agents;
    public Buddies: Buddies;
    public Bundles: Bundles;
    public Ceremonies: Ceremonies;
    public CompetitiveTiers: CompetitiveTiers;
    public ContentTiers: ContentTiers;
    public Contracts: Contracts;
    public Currencies: Currencies;
    public Events: Events;
    public Gamemodes: Gamemodes;
    public Gear: Gear;
    public Maps: Maps;
    public PlayerCards: PlayerCards;
    public PlayerTitles: PlayerTitles;
    public Seasons: Seasons;
    public Sprays: Sprays;
    public Themes: Themes;
    public Version: Version;
    public Weapons: Weapons;

    constructor(config: ValAPIConfig = {}) {
        super();

        this.config = new Object({ ..._defaultConfig, ...config });

        //config
        if (this.config.language === 'en-GB') {
            throw new Error("Language '" + this.config.language + "' is not supported");
        }

        //first reload
        this.RequestClient = new ValRequestClient(this.config.axiosConfig);
        this.RequestClient.on('error', ((data: ValorantApiError) => { this.emit('error', data); }));
        this.RequestClient.on('request', ((data: ValorantApiRequestData) => { this.emit('request', data); }));

        //service
        
        this.Agents = new Agents(this.RequestClient, String(this.config.language));
        this.Buddies = new Buddies(this.RequestClient, String(this.config.language));
        this.Bundles = new Bundles(this.RequestClient, String(this.config.language));
        this.Ceremonies = new Ceremonies(this.RequestClient, String(this.config.language));
        this.CompetitiveTiers = new CompetitiveTiers(this.RequestClient, String(this.config.language));
        this.ContentTiers = new ContentTiers(this.RequestClient, String(this.config.language));
        this.Contracts = new Contracts(this.RequestClient, String(this.config.language));
        this.Currencies = new Currencies(this.RequestClient, String(this.config.language));
        this.Events = new Events(this.RequestClient, String(this.config.language));
        this.Gamemodes = new Gamemodes(this.RequestClient, String(this.config.language));
        this.Gear = new Gear(this.RequestClient, String(this.config.language));
        this.Maps = new Maps(this.RequestClient, String(this.config.language));
        this.PlayerCards = new PlayerCards(this.RequestClient, String(this.config.language));
        this.PlayerTitles = new PlayerTitles(this.RequestClient, String(this.config.language));
        this.Seasons = new Seasons(this.RequestClient, String(this.config.language));
        this.Sprays = new Sprays(this.RequestClient, String(this.config.language));
        this.Themes = new Themes(this.RequestClient, String(this.config.language));
        this.Version = new Version(this.RequestClient);
        this.Weapons = new Weapons(this.RequestClient, String(this.config.language));

        //event
        this.emit('ready');
    }

    //reload
    private reload(): void {
        this.RequestClient = new ValRequestClient(this.config.axiosConfig);
        this.RequestClient.on('error', ((data: ValorantApiError) => { this.emit('error', data); }));
        this.RequestClient.on('request', ((data: ValorantApiRequestData) => { this.emit('request', data); }));

        //service
        
        this.Agents = new Agents(this.RequestClient, String(this.config.language));
        this.Buddies = new Buddies(this.RequestClient, String(this.config.language));
        this.Bundles = new Bundles(this.RequestClient, String(this.config.language));
        this.Ceremonies = new Ceremonies(this.RequestClient, String(this.config.language));
        this.CompetitiveTiers = new CompetitiveTiers(this.RequestClient, String(this.config.language));
        this.ContentTiers = new ContentTiers(this.RequestClient, String(this.config.language));
        this.Contracts = new Contracts(this.RequestClient, String(this.config.language));
        this.Currencies = new Currencies(this.RequestClient, String(this.config.language));
        this.Events = new Events(this.RequestClient, String(this.config.language));
        this.Gamemodes = new Gamemodes(this.RequestClient, String(this.config.language));
        this.Gear = new Gear(this.RequestClient, String(this.config.language));
        this.Maps = new Maps(this.RequestClient, String(this.config.language));
        this.PlayerCards = new PlayerCards(this.RequestClient, String(this.config.language));
        this.PlayerTitles = new PlayerTitles(this.RequestClient, String(this.config.language));
        this.Seasons = new Seasons(this.RequestClient, String(this.config.language));
        this.Sprays = new Sprays(this.RequestClient, String(this.config.language));
        this.Themes = new Themes(this.RequestClient, String(this.config.language));
        this.Version = new Version(this.RequestClient);
        this.Weapons = new Weapons(this.RequestClient, String(this.config.language));

        //event
        this.emit('ready');
    }

    //settings
    
    public setLanguage(language: ValAPIConfigLanguage): void {
        this.config.language = language;
        this.emit('changeSettings', { name: 'language', data: language });

        this.reload();
    }
}

//event
interface ValAPIClientEvent {
    'ready': () => void,
    'request': (data:ValorantApiRequestData) => void,
    'changeSettings': (data: { name: string, data: any }) => void,
    'error': (data: ValorantApiError) => void;
}

declare interface APIClient {
    emit<EventName extends keyof ValAPIClientEvent>(name: EventName, ...args: Parameters<ValAPIClientEvent[EventName]>): void;
    on<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    once<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    off<EventName extends keyof ValAPIClientEvent>(name: EventName, callback?: ValAPIClientEvent[EventName]): void;
}

//export
export { APIClient };
export type { ValAPIClientService, ValAPIConfigLanguage, ValAPIConfig, ValAPIResponse, ValAPIClientEvent };