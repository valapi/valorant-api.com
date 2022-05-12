import { CustomEvent, type ValorantAPIError } from "@valapi/lib";
import { type Axios, type AxiosRequestConfig } from 'axios';
interface ValAPIAxios<ValAPIAxiosReturn> {
    isError: boolean;
    data: ValAPIAxiosReturn;
}
declare type ValAPIAxiosProtocal = 'http' | 'https';
declare class AxiosClient extends CustomEvent {
    axiosClient: Axios;
    protected config: AxiosRequestConfig;
    /**
    * @param {ValApiAxiosConfig} config Config
    */
    constructor(config?: AxiosRequestConfig);
    /**
     *
     * @param {AxiosError} error Axios Error
     * @returns
     */
    private errorHandler;
    /**
    * @param {string} endpoint API Endpoint
    * @returns {Promise<ValAPIAxios<any>>}
    */
    request(endpoint: string, config?: AxiosRequestConfig): Promise<ValAPIAxios<any>>;
}
interface ValAPIAxiosEvent {
    'ready': () => void;
    'request': (data: string) => void;
    'error': (data: ValorantAPIError) => void;
}
declare interface AxiosClient {
    emit<EventName extends keyof ValAPIAxiosEvent>(name: EventName, ...args: Parameters<ValAPIAxiosEvent[EventName]>): void;
    on<EventName extends keyof ValAPIAxiosEvent>(name: EventName, callback: ValAPIAxiosEvent[EventName]): void;
    once<EventName extends keyof ValAPIAxiosEvent>(name: EventName, callback: ValAPIAxiosEvent[EventName]): void;
    off<EventName extends keyof ValAPIAxiosEvent>(name: EventName, callback?: ValAPIAxiosEvent[EventName]): void;
}
export { AxiosClient };
export type { ValAPIAxios, ValAPIAxiosProtocal, ValAPIAxiosEvent };
//# sourceMappingURL=AxiosClient.d.ts.map