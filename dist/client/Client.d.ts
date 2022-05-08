import { CustomEvent } from "@valapi/lib";
import { Locale } from "@valapi/lib";
import type { AxiosRequestConfig } from "axios";
import { type ValAPIAxios, type ValAPIAxiosConfig } from "./AxiosClient";
declare type ValAPIClientService<ValAPIClientServiceReturn> = ValAPIAxios<{
    status: number;
    error?: string;
    data?: ValAPIClientServiceReturn;
}>;
interface ValAPIClientError {
    errorCode: string;
    message: string;
    data: any;
}
declare type ValAPIConfigLanguage = keyof typeof Locale;
interface ValAPIConfig {
    language?: ValAPIConfigLanguage;
}
declare class APIClient extends CustomEvent {
    protected config: ValAPIConfig & ValAPIAxiosConfig;
    private AxiosClient;
    constructor(config?: ValAPIConfig & ValAPIAxiosConfig & AxiosRequestConfig);
    private reload;
    toJSON(): ValAPIConfig;
    fromJSON(data: ValAPIConfig): void;
}
interface ValAPIClientEvent {
    'ready': () => void;
    'changeSettings': (data: {
        name: string;
        data: any;
    }) => void;
    'error': (data: ValAPIClientError) => void;
}
declare interface APIClient {
    emit<EventName extends keyof ValAPIClientEvent>(name: EventName, ...args: Parameters<ValAPIClientEvent[EventName]>): void;
    on<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    once<EventName extends keyof ValAPIClientEvent>(name: EventName, callback: ValAPIClientEvent[EventName]): void;
    off<EventName extends keyof ValAPIClientEvent>(name: EventName, callback?: ValAPIClientEvent[EventName]): void;
}
export { APIClient };
export type { ValAPIClientError, ValAPIConfig, ValAPIClientEvent, ValAPIClientService };
//# sourceMappingURL=Client.d.ts.map