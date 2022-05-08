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
exports.Sprays = void 0;
//class
class Sprays {
    constructor(AxiosClient) {
        this.AxiosClient = AxiosClient;
    }
    //service
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request('/sprays');
        });
    }
    getLevels() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request(`/sprays/levels`);
        });
    }
    getByUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request(`/sprays/${uuid}`);
        });
    }
    getLevelsByUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request(`/sprays/levels/${uuid}`);
        });
    }
}
exports.Sprays = Sprays;
//# sourceMappingURL=Sprays.js.map