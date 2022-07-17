"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValAPIClient = void 0;
const lib_1 = require("@valapi/lib");
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
const LevelBorders_1 = require("../service/LevelBorders");
const Maps_1 = require("../service/Maps");
const PlayerCards_1 = require("../service/PlayerCards");
const PlayerTitles_1 = require("../service/PlayerTitles");
const Seasons_1 = require("../service/Seasons");
const Sprays_1 = require("../service/Sprays");
const Themes_1 = require("../service/Themes");
const Version_1 = require("../service/Version");
const Weapons_1 = require("../service/Weapons");
const _defaultConfig = {
    language: 'en-US',
    axiosConfig: {
        baseURL: 'https://valorant-api.com/v1',
    },
};
//class
/**
 * Third-Party API by Officer
 *
 * https://valorant-api.com/
 */
class ValAPIClient extends lib_1.ValEvent {
    /**
     * Class Constructor
     * @param {ValAPIClient.Config} config Client Config
     */
    constructor(config = {}) {
        super();
        this.config = Object.assign(Object.assign({}, _defaultConfig), config);
        //config
        if (this.config.language === 'en-GB') {
            throw new Error("Language '" + this.config.language + "' is not supported");
        }
        //first reload
        this.RequestClient = new lib_1.ValRequestClient(this.config.axiosConfig);
        this.RequestClient.on('error', ((data) => { this.emit('error', data); }));
        this.RequestClient.on('request', ((data) => { this.emit('request', data); }));
        //service
        this.Agents = new Agents_1.Agents(this.RequestClient, String(this.config.language));
        this.Buddies = new Buddies_1.Buddies(this.RequestClient, String(this.config.language));
        this.Bundles = new Bundles_1.Bundles(this.RequestClient, String(this.config.language));
        this.Ceremonies = new Ceremonies_1.Ceremonies(this.RequestClient, String(this.config.language));
        this.CompetitiveTiers = new CompetitiveTiers_1.CompetitiveTiers(this.RequestClient, String(this.config.language));
        this.ContentTiers = new ContentTiers_1.ContentTiers(this.RequestClient, String(this.config.language));
        this.Contracts = new Contracts_1.Contracts(this.RequestClient, String(this.config.language));
        this.Currencies = new Currencies_1.Currencies(this.RequestClient, String(this.config.language));
        this.Events = new Events_1.Events(this.RequestClient, String(this.config.language));
        this.Gamemodes = new Gamemodes_1.Gamemodes(this.RequestClient, String(this.config.language));
        this.Gear = new Gear_1.Gear(this.RequestClient, String(this.config.language));
        this.LevelBorders = new LevelBorders_1.LevelBorders(this.RequestClient, String(this.config.language));
        this.Maps = new Maps_1.Maps(this.RequestClient, String(this.config.language));
        this.PlayerCards = new PlayerCards_1.PlayerCards(this.RequestClient, String(this.config.language));
        this.PlayerTitles = new PlayerTitles_1.PlayerTitles(this.RequestClient, String(this.config.language));
        this.Seasons = new Seasons_1.Seasons(this.RequestClient, String(this.config.language));
        this.Sprays = new Sprays_1.Sprays(this.RequestClient, String(this.config.language));
        this.Themes = new Themes_1.Themes(this.RequestClient, String(this.config.language));
        this.Version = new Version_1.Version(this.RequestClient);
        this.Weapons = new Weapons_1.Weapons(this.RequestClient, String(this.config.language));
        //event
        this.emit('ready');
    }
    //reload
    /**
     * @returns {void}
     */
    reload() {
        this.RequestClient = new lib_1.ValRequestClient(this.config.axiosConfig);
        this.RequestClient.on('error', ((data) => { this.emit('error', data); }));
        this.RequestClient.on('request', ((data) => { this.emit('request', data); }));
        //service
        this.Agents = new Agents_1.Agents(this.RequestClient, String(this.config.language));
        this.Buddies = new Buddies_1.Buddies(this.RequestClient, String(this.config.language));
        this.Bundles = new Bundles_1.Bundles(this.RequestClient, String(this.config.language));
        this.Ceremonies = new Ceremonies_1.Ceremonies(this.RequestClient, String(this.config.language));
        this.CompetitiveTiers = new CompetitiveTiers_1.CompetitiveTiers(this.RequestClient, String(this.config.language));
        this.ContentTiers = new ContentTiers_1.ContentTiers(this.RequestClient, String(this.config.language));
        this.Contracts = new Contracts_1.Contracts(this.RequestClient, String(this.config.language));
        this.Currencies = new Currencies_1.Currencies(this.RequestClient, String(this.config.language));
        this.Events = new Events_1.Events(this.RequestClient, String(this.config.language));
        this.Gamemodes = new Gamemodes_1.Gamemodes(this.RequestClient, String(this.config.language));
        this.Gear = new Gear_1.Gear(this.RequestClient, String(this.config.language));
        this.LevelBorders = new LevelBorders_1.LevelBorders(this.RequestClient, String(this.config.language));
        this.Maps = new Maps_1.Maps(this.RequestClient, String(this.config.language));
        this.PlayerCards = new PlayerCards_1.PlayerCards(this.RequestClient, String(this.config.language));
        this.PlayerTitles = new PlayerTitles_1.PlayerTitles(this.RequestClient, String(this.config.language));
        this.Seasons = new Seasons_1.Seasons(this.RequestClient, String(this.config.language));
        this.Sprays = new Sprays_1.Sprays(this.RequestClient, String(this.config.language));
        this.Themes = new Themes_1.Themes(this.RequestClient, String(this.config.language));
        this.Version = new Version_1.Version(this.RequestClient);
        this.Weapons = new Weapons_1.Weapons(this.RequestClient, String(this.config.language));
        //event
        this.emit('ready');
    }
    //settings
    /**
     * @param {ValAPIClient.Language} language Language
     * @returns {void}
     */
    setLanguage(language) {
        this.config.language = language;
        this.emit('changeSettings', { name: 'language', data: language });
        this.reload();
    }
}
exports.ValAPIClient = ValAPIClient;
