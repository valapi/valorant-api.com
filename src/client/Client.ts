//import

import {
    ValEvent, ValRequestClient,
    Locale
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
import { LevelBorders } from "../service/LevelBorders";
import { Maps } from "../service/Maps";
import { PlayerCards } from "../service/PlayerCards";
import { PlayerTitles } from "../service/PlayerTitles";
import { Seasons } from "../service/Seasons";
import { Sprays } from "../service/Sprays";
import { Themes } from "../service/Themes";
import { Version } from "../service/Version";
import { Weapons } from "../service/Weapons";


//interface

namespace ValAPIClient {

    /**
     * localized response
     */
    export type Response<MyType> = {
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

    /**
     * API Return
     */
    export type Service<Return> = ValRequestClient.Response<{
        status: number;
        error?: string;
        data?: Return;
    }>;

    /**
     * All Language Available
     */
    export type Language = Exclude<Locale.String, 'en-GB'> | "all";

    /**
     * Client Config
     */
    export interface Config {
        /**
         * Language
         */
        language?: ValAPIClient.Language;
        /**
         * Request Config
         */
        axiosConfig?: AxiosRequestConfig;
    }

    /**
     * Client Events
     */
    export interface Event {
        'ready': () => void,
        'request': (data: ValRequestClient.Request) => void,
        'error': (data: ValEvent.Error) => void;
    }
}

//event

declare interface ValAPIClient {
    emit<EventName extends keyof ValAPIClient.Event>(name: EventName, ...args: Parameters<ValAPIClient.Event[EventName]>): void;
    on<EventName extends keyof ValAPIClient.Event>(name: EventName, callback: ValAPIClient.Event[EventName]): void;
    once<EventName extends keyof ValAPIClient.Event>(name: EventName, callback: ValAPIClient.Event[EventName]): void;
    off<EventName extends keyof ValAPIClient.Event>(name: EventName, callback?: ValAPIClient.Event[EventName]): void;
}

//class

/**
 * Third-Party API by Officer
 * 
 * https://valorant-api.com/
 */
class ValAPIClient extends ValEvent {
    protected config: ValAPIClient.Config;
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
    public LevelBorders: LevelBorders;
    public Maps: Maps;
    public PlayerCards: PlayerCards;
    public PlayerTitles: PlayerTitles;
    public Seasons: Seasons;
    public Sprays: Sprays;
    public Themes: Themes;
    public Version: Version;
    public Weapons: Weapons;

    /**
     * 
     * @param {ValAPIClient.Config} config Client Config
     */
    public constructor(config: ValAPIClient.Config = {}) {
        super();

        this.config = {
            ...{
                language: 'en-US',
                axiosConfig: {
                    baseURL: 'https://valorant-api.com/v1',
                },
            }, ...config
        };

        //first reload
        this.RequestClient = new ValRequestClient(this.config.axiosConfig);
        this.RequestClient.on('error', ((data: ValEvent.Error) => { this.emit('error', data); }));
        this.RequestClient.on('request', ((data: ValRequestClient.Request) => { this.emit('request', data); }));

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
        this.LevelBorders = new LevelBorders(this.RequestClient, String(this.config.language));
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

    /**
     * @returns {void}
     */
    private reload(): void {
        this.RequestClient = new ValRequestClient(this.config.axiosConfig);
        this.RequestClient.on('error', ((data: ValEvent.Error) => { this.emit('error', data); }));
        this.RequestClient.on('request', ((data: ValRequestClient.Request) => { this.emit('request', data); }));

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
        this.LevelBorders = new LevelBorders(this.RequestClient, String(this.config.language));
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

    /**
     * @param {ValAPIClient.Language} language Language
     * @returns {void}
     */
    public setLanguage(language: ValAPIClient.Language): void {
        this.config.language = language;

        this.reload();
    }
}

//export

export { ValAPIClient };