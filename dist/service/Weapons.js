"use strict";
//import
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapons = void 0;
//class
class Weapons {
    constructor(AxiosClient) {
        this.AxiosClient = AxiosClient;
    }
    //service
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request('/weapons');
        });
    }
    getSkins() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request('/weapons/skins');
        });
    }
    getSkinChromas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request('/weapons/skinchromas');
        });
    }
    getSkinLevels() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request('/weapons/skinlevels');
        });
    }
    getByUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request(`/weapons/${uuid}`);
        });
    }
    getSkinByUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request(`/weapons/skins/${uuid}`);
        });
    }
    getSkinChromaByUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request(`/weapons/skinchromas/${uuid}`);
        });
    }
    getSkinLevelByUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request(`/weapons/skinlevels/${uuid}`);
        });
    }
}
exports.Weapons = Weapons;
//# sourceMappingURL=Weapons.js.map