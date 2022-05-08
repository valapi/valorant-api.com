"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIClient = void 0;
//import
const lib_1 = require("@valapi/lib");
const AxiosClient_1 = require("./AxiosClient");
//class
class APIClient extends lib_1.CustomEvent {
    //service
    //wait me please
    constructor(config = {}) {
        super();
        //config
        if (!config.language) {
            config.language = 'en-US';
        }
        else if (config.language = 'data' || config.language == 'en-GB') {
            throw new Error("Language '" + config.language + "' is not supported");
        }
        this.config = config;
        delete config.language;
        //first reload
        this.AxiosClient = new AxiosClient_1.AxiosClient(this.config);
        this.AxiosClient.on('error', ((data) => { this.emit('error', data); }));
        //event
        this.emit('ready');
    }
    //reload
    reload() {
        this.AxiosClient = new AxiosClient_1.AxiosClient(this.config);
        this.AxiosClient.on('error', ((data) => { this.emit('error', data); }));
    }
    //save
    toJSON() {
        return this.config;
    }
    fromJSON(data) {
        this.config = data;
    }
}
exports.APIClient = APIClient;
//# sourceMappingURL=Client.js.map