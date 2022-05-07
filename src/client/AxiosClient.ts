//import
import { CustomEvent } from "@valapi/lib";
import axios, { type Axios, type AxiosRequestConfig, AxiosError } from 'axios';

//interface
interface ValAPIAxios<ValAPIAxiosReturn> {
    isError: boolean;
    data: ValAPIAxiosReturn;
}

type ValAPIAxiosProtocal = 'http' | 'https';

interface ValAPIAxiosConfig {
    protocol?: ValAPIAxiosProtocal;
    baseURL?: string;
    apiVersion?: number;
    timeout?: number;
}

interface ValAPIAxiosError {
    errorCode: string,
    message: string,
    data: any,
}

//class
class AxiosClient extends CustomEvent {
    axiosClient: Axios;
    config: ValAPIAxiosConfig;

    /**
    * @param {ValApiAxiosConfig} config Config
    */
    constructor(config: ValAPIAxiosConfig = {}) {
        super();

        if(!config.protocol){
            config.protocol = 'https';
        }

        if(!config.baseURL){
            config.baseURL = 'valorant-api.com';
        }

        if(!config.apiVersion){
            config.apiVersion = 1;
        }
        
        if(!config.timeout){
            config.timeout = 60000; // 1 minute (60 * 1000)
        }

        this.axiosClient = axios.create({ timeout: config.timeout });
        
        //event
        this.config = config;
        this.emit('ready');
    }

    /**
     * 
     * @param {AxiosError} error Axios Error
     * @returns 
     */
     private errorHandler(error:AxiosError):ValAPIAxios<any> {
        //event
        const RequestError:ValAPIAxiosError = {
            errorCode: 'ValAPI_Request_Error',
            message: error.message,
            data: error,
        }

        this.emit('error', RequestError)

        //data
        if(error.response && error.response.data){
            return {
                isError: error.isAxiosError,
                data: error.response.data,
            }
        }

        if(error.response && error.response.status && error.response.statusText){
            return {
                isError: error.isAxiosError,
                data: {
                    errorCode: error.response.status,
                    message: error.response.statusText,
                }
            }
        }

        return {
            isError: error.isAxiosError,
            data: {
                errorCode: error.name,
                message: error.message,
            }
        }
     }

     /**
      * @param {Number} apiVersion API Version
      * @returns {String}
      */
     protected getURL(apiVersion?:number):string {
        if(!apiVersion){
            apiVersion = 1;
        }

         return `${this.config.protocol}://${this.config.baseURL}/v${String(apiVersion)}`;
     }

    /**
    * @param {string} endpoint API Endpoint
    * @returns {Promise<ValAPIAxios<any>>}
    */
     public async request(endpoint:string, config:AxiosRequestConfig = {}):Promise<ValAPIAxios<any>> {
        //setup
        let _error = false;

        if(!endpoint.startsWith('/')){
            endpoint = `/${endpoint}`;
        }
        const _URL = this.getURL(this.config.apiVersion) + endpoint;

        this.emit('request', _URL);

        //request
        const _request:any = await this.axiosClient.get(_URL, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:any) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }
}

//event

interface ValAPIAxiosEvent {
    'ready': () => void;
    'request': (data: string) => void;
    'error': (data: ValAPIAxiosError) => void;
}

declare interface AxiosClient {
    on<EventName extends keyof ValAPIAxiosEvent>(name: EventName, callback: ValAPIAxiosEvent[EventName]): void;
    once<EventName extends keyof ValAPIAxiosEvent>(name: EventName, callback: ValAPIAxiosEvent[EventName]): void;
    off<EventName extends keyof ValAPIAxiosEvent>(name: EventName, callback?: ValAPIAxiosEvent[EventName]): void;
}

//export
export { AxiosClient };
export type { ValAPIAxios, ValAPIAxiosProtocal, ValAPIAxiosConfig, ValAPIAxiosError, ValAPIAxiosEvent };