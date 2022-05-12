//import
import { CustomEvent, type ValorantAPIError } from "@valapi/lib";

import { Locale } from "@valapi/lib";
import { Region as _Region } from "@valapi/lib";

import type { AxiosRequestConfig } from "axios";
import { AxiosClient, type ValAPIAxios } from "./AxiosClient";

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

type ValAPIClientService<ValAPIClientServiceReturn> = ValAPIAxios<{
    status: number;
    error?: string;
    data?: ValAPIClientServiceReturn;
}>;

type ValAPIConfigLanguage = keyof typeof Locale

interface ValAPIConfig {
    language?: ValAPIConfigLanguage; //can use 'all' but not supported yet
    axiosConfig?: AxiosRequestConfig;
}

const _defaultConfig:ValAPIConfig = {
    language: 'en-US',
    axiosConfig: {},
}

//class
class APIClient extends CustomEvent {
    protected config: ValAPIConfig;
    private AxiosClient: AxiosClient;

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

        //config
        if (config.language === 'data' || config.language === 'en-GB') {
            throw new Error("Language '" + config.language + "' is not supported");
        }

        this.config = new Object({ ..._defaultConfig, ...config });

        //first reload
        this.AxiosClient = new AxiosClient(this.config.axiosConfig);
        this.AxiosClient.on('error', ((data: ValorantAPIError) => { this.emit('error', data); }));
        this.AxiosClient.on('request', ((data:string) => { this.emit('request', data as string); }));

        //service
        
        this.Agents = new Agents(this.AxiosClient, String(this.config.language));
        this.Buddies = new Buddies(this.AxiosClient, String(this.config.language));
        this.Bundles = new Bundles(this.AxiosClient, String(this.config.language));
        this.Ceremonies = new Ceremonies(this.AxiosClient, String(this.config.language));
        this.CompetitiveTiers = new CompetitiveTiers(this.AxiosClient, String(this.config.language));
        this.ContentTiers = new ContentTiers(this.AxiosClient, String(this.config.language));
        this.Contracts = new Contracts(this.AxiosClient, String(this.config.language));
        this.Currencies = new Currencies(this.AxiosClient, String(this.config.language));
        this.Events = new Events(this.AxiosClient, String(this.config.language));
        this.Gamemodes = new Gamemodes(this.AxiosClient, String(this.config.language));
        this.Gear = new Gear(this.AxiosClient, String(this.config.language));
        this.Maps = new Maps(this.AxiosClient, String(this.config.language));
        this.PlayerCards = new PlayerCards(this.AxiosClient, String(this.config.language));
        this.PlayerTitles = new PlayerTitles(this.AxiosClient, String(this.config.language));
        this.Seasons = new Seasons(this.AxiosClient, String(this.config.language));
        this.Sprays = new Sprays(this.AxiosClient, String(this.config.language));
        this.Themes = new Themes(this.AxiosClient, String(this.config.language));
        this.Version = new Version(this.AxiosClient);
        this.Weapons = new Weapons(this.AxiosClient, String(this.config.language));

        //event
        this.emit('ready');
    }

    //reload
    private reload(): void {
        this.AxiosClient = new AxiosClient(this.config.axiosConfig);
        this.AxiosClient.on('error', ((data: ValorantAPIError) => { this.emit('error', data); }));
        this.AxiosClient.on('request', ((data:string) => { this.emit('request', data as string); }));

        //service
        
        this.Agents = new Agents(this.AxiosClient, String(this.config.language));
        this.Buddies = new Buddies(this.AxiosClient, String(this.config.language));
        this.Bundles = new Bundles(this.AxiosClient, String(this.config.language));
        this.Ceremonies = new Ceremonies(this.AxiosClient, String(this.config.language));
        this.CompetitiveTiers = new CompetitiveTiers(this.AxiosClient, String(this.config.language));
        this.ContentTiers = new ContentTiers(this.AxiosClient, String(this.config.language));
        this.Contracts = new Contracts(this.AxiosClient, String(this.config.language));
        this.Currencies = new Currencies(this.AxiosClient, String(this.config.language));
        this.Events = new Events(this.AxiosClient, String(this.config.language));
        this.Gamemodes = new Gamemodes(this.AxiosClient, String(this.config.language));
        this.Gear = new Gear(this.AxiosClient, String(this.config.language));
        this.Maps = new Maps(this.AxiosClient, String(this.config.language));
        this.PlayerCards = new PlayerCards(this.AxiosClient, String(this.config.language));
        this.PlayerTitles = new PlayerTitles(this.AxiosClient, String(this.config.language));
        this.Seasons = new Seasons(this.AxiosClient, String(this.config.language));
        this.Sprays = new Sprays(this.AxiosClient, String(this.config.language));
        this.Themes = new Themes(this.AxiosClient, String(this.config.language));
        this.Version = new Version(this.AxiosClient);
        this.Weapons = new Weapons(this.AxiosClient, String(this.config.language));

        //event
        this.emit('ready');
    }

    //settings
    
    public setLanguage(language: ValAPIConfigLanguage): void {
        if(language === 'data'){
            this.emit('error', { errorCode: 'ValAPIClient_Config_Error', message: "Language 'data' not found", data: language });
        }

        this.config.language = language;
        this.emit('changeSettings', { name: 'language', data: language });

        this.reload();
    }
}

//event
interface ValAPIClientEvent {
    'ready': () => void,
    'request': (data:string) => void,
    'changeSettings': (data: { name: string, data: any }) => void,
    'error': (data: ValorantAPIError) => void;
}

declare interface APIClient {
    emit<EventName extends keyof ValAPIClientEvent>(name: EventName, ...args: Parameters<ValAPIClientEvent[EventName]>): void;
    on<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    once<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    off<EventName extends keyof ValAPIClientEvent>(name: EventName, callback?: ValAPIClientEvent[EventName]): void;
}

//export
export { APIClient };
export type { ValAPIConfig, ValAPIClientEvent, ValAPIClientService };