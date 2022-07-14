"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTiers = void 0;
const tslib_1 = require("tslib");
//class
class ContentTiers {
    constructor(RequestClient, language) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/contenttiers' + `?language=${this.language}`);
        });
    }
    getByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/contenttiers/${uuid}` + `?language=${this.language}`);
        });
    }
}
exports.ContentTiers = ContentTiers;
