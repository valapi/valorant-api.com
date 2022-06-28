"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
const tslib_1 = require("tslib");
//class
class Version {
    constructor(RequestClient) {
        this.RequestClient = RequestClient;
    }
    //service
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/version');
        });
    }
}
exports.Version = Version;
//# sourceMappingURL=Version.js.map