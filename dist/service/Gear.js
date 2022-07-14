"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gear = void 0;
const tslib_1 = require("tslib");
//class
class Gear {
    constructor(RequestClient, language) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/gear' + `?language=${this.language}`);
        });
    }
    getByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/gear/${uuid}` + `?language=${this.language}`);
        });
    }
}
exports.Gear = Gear;
