"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maps = void 0;
const tslib_1 = require("tslib");
//class
class Maps {
    constructor(RequestClient, language) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/maps' + `?language=${this.language}`);
        });
    }
    getByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/maps/${uuid}` + `?language=${this.language}`);
        });
    }
}
exports.Maps = Maps;
//# sourceMappingURL=Maps.js.map