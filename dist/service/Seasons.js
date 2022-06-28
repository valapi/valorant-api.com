"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seasons = void 0;
const tslib_1 = require("tslib");
//class
class Seasons {
    constructor(RequestClient, language) {
        this.RequestClient = RequestClient;
        this.language = language;
    }
    //service
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/seasons' + `?language=${this.language}`);
        });
    }
    getCompetitiveSeasons() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get('/seasons/competitive');
        });
    }
    getByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/seasons/${uuid}` + `?language=${this.language}`);
        });
    }
    getCompetitiveSeasonByUuid(uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(`/seasons/competitive/${uuid}`);
        });
    }
}
exports.Seasons = Seasons;
//# sourceMappingURL=Seasons.js.map