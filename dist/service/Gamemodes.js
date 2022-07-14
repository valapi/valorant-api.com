"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gamemodes = void 0;
const tslib_1 = require("tslib");
//class
class Gamemodes {
    constructor(RequestClient, language) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/gamemodes' + `?language=${this.language}`);
        });
    }
    getEquippables() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/gamemodes/equippables` + `?language=${this.language}`);
        });
    }
    getByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/gamemodes/${uuid}` + `?language=${this.language}`);
        });
    }
    getEquippableByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/gamemodes/equippables/${uuid}` + `?language=${this.language}`);
        });
    }
}
exports.Gamemodes = Gamemodes;
