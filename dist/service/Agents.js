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
exports.Agents = void 0;
//class
class Agents {
    constructor(AxiosClient, language) {
        this.AxiosClient = AxiosClient;
        this.language = language;
    }
    //service
    get(isPlayableCharacter) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `/agents` + `?language=${this.language}`;
            if (isPlayableCharacter === false) {
                url += `&isPlayableCharacter=false`;
            }
            else if (isPlayableCharacter === true) {
                url += `&isPlayableCharacter=true`;
            }
            return yield this.AxiosClient.request(url);
        });
    }
    getByUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.request(`/agents/${uuid}` + `?language=${this.language}`);
        });
    }
}
exports.Agents = Agents;
//# sourceMappingURL=Agents.js.map