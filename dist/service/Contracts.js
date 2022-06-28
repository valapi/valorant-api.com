"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contracts = void 0;
const tslib_1 = require("tslib");
//class
class Contracts {
    constructor(RequestClient, language) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/contracts' + `?language=${this.language}`);
        });
    }
    getByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/contracts/${uuid}` + `?language=${this.language}`);
        });
    }
}
exports.Contracts = Contracts;
//# sourceMappingURL=Contracts.js.map