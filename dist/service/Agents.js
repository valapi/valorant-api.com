"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agents = void 0;
const tslib_1 = require("tslib");
//class
class Agents {
    constructor(RequestClient, language) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service
    get(isPlayableCharacter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let url = `/agents` + `?language=${this.language}`;
            if (isPlayableCharacter === false) {
                url += `&isPlayableCharacter=false`;
            }
            else if (isPlayableCharacter === true) {
                url += `&isPlayableCharacter=true`;
            }
            return yield this.RequestClient.get(url);
        });
    }
    getByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/agents/${uuid}` + `?language=${this.language}`);
        });
    }
}
exports.Agents = Agents;
//# sourceMappingURL=Agents.js.map