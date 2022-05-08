//import
import { CustomEvent } from "@valapi/lib";

import { Locale } from "@valapi/lib";
import { Region as _Region } from "@valapi/lib";
import { AxiosClient, type ValAPIAxiosConfig, type ValAPIAxiosError } from "./AxiosClient";

//interface

interface ValAPIClientService<ValAPIClientServiceReturn> { 
    isError:boolean, 
    status:number, 
    data?:ValAPIClientServiceReturn,
    error?:string,
}

interface ValAPIClientError {
    errorCode: string,
    message: string,
    data: any,
}

type ValAPIConfigLanguage = keyof typeof Locale

interface ValAPIConfig {
    language?: ValAPIConfigLanguage
}

//class
class APIClient extends CustomEvent {
    config: ValAPIConfig & ValAPIAxiosConfig;
    AxiosClient: AxiosClient;

    //service
    //wait me please

    constructor(config: ValAPIConfig & ValAPIAxiosConfig = {}) {
        super();

        //config

        if(!config.language){
            config.language = 'en-US';
        } else if (config.language = 'data'){
            throw new Error("Language '" + config.language + "' is not supported");
        }

        this.config = {
            language: config.language,
        };

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
    'changeSettings': (data: { name:any, data:any }) => void,
    'error': (data: ValAPIClientError) => void;
}

declare interface APIClient {
    on<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    once<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    off<EventName extends keyof ValAPIClientEvent>(name: EventName, callback?: ValAPIClientEvent[EventName]): void;
}

//export
export { APIClient };
export type { ValAPIClientError, ValAPIConfig, ValAPIClientEvent, ValAPIClientService };