"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buddies = void 0;
const tslib_1 = require("tslib");
//class
class Buddies {
    constructor(RequestClient, language) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/buddies' + `?language=${this.language}`);
        });
    }
    getLevels() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/buddies/levels` + `?language=${this.language}`);
        });
    }
    getByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/buddies/${uuid}` + `?language=${this.language}`);
        });
    }
    getLevelByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/buddies/levels/${uuid}` + `?language=${this.language}`);
        });
    }
}
exports.Buddies = Buddies;
