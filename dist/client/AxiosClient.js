"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosClient = void 0;
//import
const lib_1 = require("@valapi/lib");
const axios_1 = __importDefault(require("axios"));
//class
class AxiosClient extends lib_1.CustomEvent {
    /**
    * @param {ValApiAxiosConfig} config Config
    */
    constructor(config = {}) {
        super();
        if (!config.protocol) {
            config.protocol = 'https';
        }
        if (!config.baseURL) {
            config.baseURL = 'valorant-api.com';
        }
        if (!config.apiVersion) {
            config.apiVersion = 1;
        }
        this.config = config;
        delete config.protocol;
        delete config.baseURL;
        delete config.apiVersion;
        this.axiosClient = axios_1.default.create(config);
        //event
        this.emit('ready');
    }
    /**
     *
     * @param {AxiosError} error Axios Error
     * @returns
     */
    errorHandler(error) {
        //event
        const RequestError = {
            errorCode: 'ValAPI_Request_Error',
            message: error.message,
            data: error,
        };
        this.emit('error', RequestError);
        //data
        if (error.response && error.response.data) {
            return {
                isError: error.isAxiosError,
                data: error.response.data,
            };
        }
        if (error.response && error.response.status && error.response.statusText) {
            return {
                isError: error.isAxiosError,
                data: {
                    errorCode: error.response.status,
                    message: error.response.statusText,
                }
            };
        }
        return {
            isError: error.isAxiosError,
            data: {
                errorCode: error.name,
                message: error.message,
            }
        };
    }
    /**
     * @param {Number} apiVersion API Version
     * @returns {String}
     */
    getURL(apiVersion) {
        if (!apiVersion) {
            apiVersion = 1;
        }
        return `${this.config.protocol}://${this.config.baseURL}/v${String(apiVersion)}`;
    }
    /**
    * @param {string} endpoint API Endpoint
    * @returns {Promise<ValAPIAxios<any>>}
    */
    request(endpoint, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            //setup
            let _error = false;
            if (!endpoint.startsWith('/')) {
                endpoint = `/${endpoint}`;
            }
            const _URL = this.getURL(this.config.apiVersion) + endpoint;
            this.emit('request', _URL);
            //request
            const _request = yield this.axiosClient.get(_URL, config).catch((error) => {
                return this.errorHandler(error);
            }).then((response) => {
                if (_error) {
                    return response;
                }
                else {
                    return response.data;
                }
            });
            //return
            return {
                isError: _error,
                data: _request,
            };
        });
    }
}
exports.AxiosClient = AxiosClient;
//# sourceMappingURL=AxiosClient.js.map