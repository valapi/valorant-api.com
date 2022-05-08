"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIClient = void 0;
//import
const lib_1 = require("@valapi/lib");
const AxiosClient_1 = require("./AxiosClient");
//service
const Agents_1 = require("../service/Agents");
const Buddies_1 = require("../service/Buddies");
const Bundles_1 = require("../service/Bundles");
const Ceremonies_1 = require("../service/Ceremonies");
const CompetitiveTiers_1 = require("../service/CompetitiveTiers");
const ContentTiers_1 = require("../service/ContentTiers");
const Contracts_1 = require("../service/Contracts");
const Currencies_1 = require("../service/Currencies");
const Events_1 = require("../service/Events");
const Gamemodes_1 = require("../service/Gamemodes");
const Gear_1 = require("../service/Gear");
const Maps_1 = require("../service/Maps");
const PlayerCards_1 = require("../service/PlayerCards");
const PlayerTitles_1 = require("../service/PlayerTitles");
const Seasons_1 = require("../service/Seasons");
const Sprays_1 = require("../service/Sprays");
const Themes_1 = require("../service/Themes");
const Version_1 = require("../service/Version");
const Weapons_1 = require("../service/Weapons");
//class
class APIClient extends lib_1.CustomEvent {
    constructor(config = {}) {
        super();
        //config
        if (!config.language) {
            config.language = 'en-US';
        }
        else if (config.language = 'data' || config.language == 'en-GB') {
            throw new Error("Language '" + config.language + "' is not supported");
        }
        this.config = config;
        //first reload
        this.AxiosClient = new AxiosClient_1.AxiosClient(this.config.axiosConfig);
        this.AxiosClient.on('error', ((data) => { this.emit('error', data); }));
        //service
        this.Agents = new Agents_1.Agents(this.AxiosClient);
        this.Buddies = new Buddies_1.Buddies(this.AxiosClient);
        this.Bundles = new Bundles_1.Bundles(this.AxiosClient);
        this.Ceremonies = new Ceremonies_1.Ceremonies(this.AxiosClient);
        this.CompetitiveTiers = new CompetitiveTiers_1.CompetitiveTiers(this.AxiosClient);
        this.ContentTiers = new ContentTiers_1.ContentTiers(this.AxiosClient);
        this.Contracts = new Contracts_1.Contracts(this.AxiosClient);
        this.Currencies = new Currencies_1.Currencies(this.AxiosClient);
        this.Events = new Events_1.Events(this.AxiosClient);
        this.Gamemodes = new Gamemodes_1.Gamemodes(this.AxiosClient);
        this.Gear = new Gear_1.Gear(this.AxiosClient);
        this.Maps = new Maps_1.Maps(this.AxiosClient);
        this.PlayerCards = new PlayerCards_1.PlayerCards(this.AxiosClient);
        this.PlayerTitles = new PlayerTitles_1.PlayerTitles(this.AxiosClient);
        this.Seasons = new Seasons_1.Seasons(this.AxiosClient);
        this.Sprays = new Sprays_1.Sprays(this.AxiosClient);
        this.Themes = new Themes_1.Themes(this.AxiosClient);
        this.Version = new Version_1.Version(this.AxiosClient);
        this.Weapons = new Weapons_1.Weapons(this.AxiosClient);
        //event
        this.emit('ready');
    }
    //reload
    reload() {
        this.AxiosClient = new AxiosClient_1.AxiosClient(this.config.axiosConfig);
        this.AxiosClient.on('error', ((data) => { this.emit('error', data); }));
        //service
        this.Agents = new Agents_1.Agents(this.AxiosClient);
        this.Buddies = new Buddies_1.Buddies(this.AxiosClient);
        this.Bundles = new Bundles_1.Bundles(this.AxiosClient);
        this.Ceremonies = new Ceremonies_1.Ceremonies(this.AxiosClient);
        this.CompetitiveTiers = new CompetitiveTiers_1.CompetitiveTiers(this.AxiosClient);
        this.ContentTiers = new ContentTiers_1.ContentTiers(this.AxiosClient);
        this.Contracts = new Contracts_1.Contracts(this.AxiosClient);
        this.Currencies = new Currencies_1.Currencies(this.AxiosClient);
        this.Events = new Events_1.Events(this.AxiosClient);
        this.Gamemodes = new Gamemodes_1.Gamemodes(this.AxiosClient);
        this.Gear = new Gear_1.Gear(this.AxiosClient);
        this.Maps = new Maps_1.Maps(this.AxiosClient);
        this.PlayerCards = new PlayerCards_1.PlayerCards(this.AxiosClient);
        this.PlayerTitles = new PlayerTitles_1.PlayerTitles(this.AxiosClient);
        this.Seasons = new Seasons_1.Seasons(this.AxiosClient);
        this.Sprays = new Sprays_1.Sprays(this.AxiosClient);
        this.Themes = new Themes_1.Themes(this.AxiosClient);
        this.Version = new Version_1.Version(this.AxiosClient);
        this.Weapons = new Weapons_1.Weapons(this.AxiosClient);
    }
    //save
    toJSON() {
        return this.config;
    }
    fromJSON(data) {
        this.config = data;
    }
    //settings
    setLanguage(language) {
        if (language === 'data') {
            this.emit('error', { errorCode: 'ValAPIClient_Config_Error', message: "Language 'data' not found", data: language });
        }
        this.config.language = language;
        this.emit('changeSettings', { name: 'language', data: language });
        this.reload();
    }
}
exports.APIClient = APIClient;
//# sourceMappingURL=Client.js.map