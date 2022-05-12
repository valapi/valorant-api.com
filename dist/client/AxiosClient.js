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
        if (!config.baseURL) {
            config.baseURL = 'https://valorant-api.com/v1';
        }
        this.config = config;
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
        this.emit('error', {
            errorCode: 'ValAPI_Request_Error',
            message: error.message,
            data: error,
        });
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
            this.emit('request', endpoint);
            //request
            const _request = yield this.axiosClient.get(endpoint, config).catch((error) => {
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