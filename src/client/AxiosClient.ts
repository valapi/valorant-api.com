//import
import { CustomEvent } from "@valapi/lib";
import axios, { type Axios, type AxiosRequestConfig, type AxiosError } from 'axios';

//interface
interface ValAPIAxios<ValAPIAxiosReturn> {
    isError:boolean,  
    data:ValAPIAxiosReturn,
}

type ValAPIAxiosProtocal = 'http' | 'https';

interface ValAPIAxiosError {
    errorCode: string,
    message: string,
    data: any,
}

//class
class AxiosClient extends CustomEvent {
    public axiosClient: Axios;
    protected config: AxiosRequestConfig;

    /**
    * @param {ValApiAxiosConfig} config Config
    */
    constructor(config: AxiosRequestConfig = {}) {
        super();

        if(!config.baseURL){
            config.baseURL = 'https://valorant-api.com/v1';
        }

        this.config = config;

        this.axiosClient = axios.create(config);
        
        //event
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
    * @param {string} endpoint API Endpoint
    * @returns {Promise<ValAPIAxios<any>>}
    */
     public async request(endpoint:string, config:AxiosRequestConfig = {}):Promise<ValAPIAxios<any>> {
        //setup
        let _error = false;

        if(!endpoint.startsWith('/')){
            endpoint = `/${endpoint}`;
        }

        this.emit('request', endpoint);

        //request
        const _request:any = await this.axiosClient.get(endpoint, config).catch((error:AxiosError):any => {
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
    emit<EventName extends keyof ValAPIAxiosEvent>(name: EventName, ...args: Parameters<ValAPIAxiosEvent[EventName]>): void;
    on<EventName extends keyof ValAPIAxiosEvent>(name: EventName, callback: ValAPIAxiosEvent[EventName]): void;
    once<EventName extends keyof ValAPIAxiosEvent>(name: EventName, callback: ValAPIAxiosEvent[EventName]): void;
    off<EventName extends keyof ValAPIAxiosEvent>(name: EventName, callback?: ValAPIAxiosEvent[EventName]): void;
}

//export
export { AxiosClient };
export type { ValAPIAxios, ValAPIAxiosProtocal, ValAPIAxiosError, ValAPIAxiosEvent };