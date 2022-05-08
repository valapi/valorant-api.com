//import
import { CustomEvent } from "@valapi/lib";

import { Locale } from "@valapi/lib";
import { Region as _Region } from "@valapi/lib";

import type { AxiosRequestConfig } from "axios";
import { AxiosClient, type ValAPIAxios, type ValAPIAxiosConfig, type ValAPIAxiosError } from "./AxiosClient";

//service


//interface

type ValAPIClientService<ValAPIClientServiceReturn> = ValAPIAxios<{
    status: number;
    error?: string;
    data?: ValAPIClientServiceReturn;
}>;

interface ValAPIClientError {
    errorCode: string;
    message: string;
    data: any;
}

type ValAPIConfigLanguage = keyof typeof Locale

interface ValAPIConfig {
    language?: ValAPIConfigLanguage; //can use 'all' but not supported yet
}

//class
class APIClient extends CustomEvent {
    protected config: ValAPIConfig & ValAPIAxiosConfig;
    private AxiosClient: AxiosClient;

    //service
    //wait me please

    constructor(config: ValAPIConfig & ValAPIAxiosConfig & AxiosRequestConfig = {}) {
        super();

        //config
        if(!config.language){
            config.language = 'en-US';
        } else if (config.language = 'data' || config.language == 'en-GB'){
            throw new Error("Language '" + config.language + "' is not supported");
        }

        this.config = config;

        delete config.language;

        //first reload
        this.AxiosClient = new AxiosClient(this.config);
        this.AxiosClient.on('error', ((data:ValAPIAxiosError) => { this.emit('error', data); }));

        //event
        this.emit('ready');
    }

    //reload
    private reload(): void {
        this.AxiosClient = new AxiosClient(this.config);
        this.AxiosClient.on('error', ((data:ValAPIAxiosError) => { this.emit('error', data); }));
    }

    //save

    public toJSON(): ValAPIConfig {
        return this.config;
    }

    public fromJSON(data: ValAPIConfig): void {
        this.config = data;
    }

    //settings
    //wait me please

    //static
    //wait me please
}

//event
interface ValAPIClientEvent {
    'ready': () => void,
    'changeSettings': (data: { name:string, data:any }) => void,
    'error': (data: ValAPIClientError) => void;
}

declare interface APIClient {
    emit<EventName extends keyof ValAPIClientEvent>(name: EventName, ...args: Parameters<ValAPIClientEvent[EventName]>): void;
    on<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    once<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    off<EventName extends keyof ValAPIClientEvent>(name: EventName, callback?: ValAPIClientEvent[EventName]): void;
}

//export
export { APIClient };
export type { ValAPIClientError, ValAPIConfig, ValAPIClientEvent, ValAPIClientService };