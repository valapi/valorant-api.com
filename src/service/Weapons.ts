//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";

//interface

namespace Weapons {
    export interface WeaponSkinChromas {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        displayIcon: string;
        fullRender: string;
        swatch: string;
        streamedVideo: string;
        assetPath: string;
    }

    export interface WeaponSkinLevels {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        levelItem: string;
        displayIcon: string;
        streamedVideo: string;
        assetPath: string;
    }

    export interface WeaponSkins {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        themeUuid: string;
        contentTierUuid: string;
        displayIcon: string;
        wallpaper: string;
        assetPath: string;
        chromas: Array<Weapons.WeaponSkinChromas>;
        levels: Array<Weapons.WeaponSkinLevels>;
    }

    export interface Weapons {
        uuid: string;
        displayName: ValAPIClient.Response<string>; //localized
        category: string;
        defaultSkinUuid: string;
        displayIcon: string;
        killStreamIcon: string;
        assetPath: string;
        weaponStats: {
            fireRate: number;
            magazineSize: number;
            runSpeedMultiplier: number;
            equipTimeSeconds: number;
            reloadTimeSeconds: number;
            firstBulletAccuracy: number;
            shotgunPelletCount: number;
            wallPenetration: string;
            feature: string;
            fireMode: string;
            altFireType: string;
            adsStats: {
                zoomMultiplier: number;
                fireRate: number;
                runSpeedMultiplier: number;
                burstCount: number;
                firstBulletAccuracy: number;
            };
            altShotgunStats: {
                shotgunPelletCount: number;
                burstRate: number;
            };
            airBurstStats: {
                shotgunPelletCount: number;
                burstDistance: number;
            };
            damageRanges: Array<{
                rangeStartMeters: number;
                rangeEndMeters: number;
                headDamage: number;
                bodyDamage: number;
                legDamage: number;
            }>;
        };
        shopData: {
            cost: number;
            category: string;
            categoryText: ValAPIClient.Response<string>; //localized
            gridPosition: {
                row: number;
                column: number;
            };
            canBeTrashed: boolean;
            image: string;
            newImage: string;
            newImage2: string;
            assetPath: string;
        };
        skins: Array<Weapons.WeaponSkins>;
    }
}

//class

class Weapons {
    private RequestClient: ValRequestClient;
    private language: string;

    public constructor(RequestClient: ValRequestClient, language: string) {
        this.RequestClient = RequestClient;
        this.language = language;
    }

    //service

    public async get(): Promise<ValAPIClient.Service<Weapons.Weapons[]>> {
        return await this.RequestClient.get('/weapons' + `?language=${this.language}`);
    }

    public async getSkins(): Promise<ValAPIClient.Service<Weapons.WeaponSkins[]>> {
        return await this.RequestClient.get('/weapons/skins' + `?language=${this.language}`);
    }

    public async getSkinChromas(): Promise<ValAPIClient.Service<Weapons.WeaponSkinChromas[]>> {
        return await this.RequestClient.get('/weapons/skinchromas' + `?language=${this.language}`);
    }

    public async getSkinLevels(): Promise<ValAPIClient.Service<Weapons.WeaponSkinLevels[]>> {
        return await this.RequestClient.get('/weapons/skinlevels' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClient.Service<Weapons.Weapons>> {
        return await this.RequestClient.get(`/weapons/${uuid}` + `?language=${this.language}`);
    }

    public async getSkinByUuid(uuid: string): Promise<ValAPIClient.Service<Weapons.WeaponSkins>> {
        return await this.RequestClient.get(`/weapons/skins/${uuid}` + `?language=${this.language}`);
    }

    public async getSkinChromaByUuid(uuid: string): Promise<ValAPIClient.Service<Weapons.WeaponSkinChromas>> {
        return await this.RequestClient.get(`/weapons/skinchromas/${uuid}` + `?language=${this.language}`);
    }

    public async getSkinLevelByUuid(uuid: string): Promise<ValAPIClient.Service<Weapons.WeaponSkinLevels>> {
        return await this.RequestClient.get(`/weapons/skinlevels/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Weapons };