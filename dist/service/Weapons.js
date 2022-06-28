"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapons = void 0;
const tslib_1 = require("tslib");
//class
class Weapons {
    constructor(RequestClient, language) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/weapons' + `?language=${this.language}`);
        });
    }
    getSkins() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/weapons/skins' + `?language=${this.language}`);
        });
    }
    getSkinChromas() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/weapons/skinchromas' + `?language=${this.language}`);
        });
    }
    getSkinLevels() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/weapons/skinlevels' + `?language=${this.language}`);
        });
    }
    getByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/weapons/${uuid}` + `?language=${this.language}`);
        });
    }
    getSkinByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/weapons/skins/${uuid}` + `?language=${this.language}`);
        });
    }
    getSkinChromaByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/weapons/skinchromas/${uuid}` + `?language=${this.language}`);
        });
    }
    getSkinLevelByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/weapons/skinlevels/${uuid}` + `?language=${this.language}`);
        });
    }
}
exports.Weapons = Weapons;
//# sourceMappingURL=Weapons.js.map