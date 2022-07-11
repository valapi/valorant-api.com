//import

import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";

//interface

interface ValAPIServiceWeaponSkinChromas {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    displayIcon: string;
    fullRender: string;
    swatch: string;
    streamedVideo: string;
    assetPath: string;
}

interface ValAPIServiceWeaponSkinLevels {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    levelItem: string;
    displayIcon: string;
    streamedVideo: string;
    assetPath: string;
}

interface ValAPIServiceWeaponSkins {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string;
    wallpaper: string;
    assetPath: string;
    chromas: Array<ValAPIServiceWeaponSkinChromas>;
    levels: Array<ValAPIServiceWeaponSkinLevels>;
}

interface ValAPIServiceWeapons {
    uuid: string;
    displayName: ValAPIResponse<string>; //localized
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
        categoryText: ValAPIResponse<string>; //localized
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
    skins: Array<ValAPIServiceWeaponSkins>;
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

    public async get(): Promise<ValAPIClientService<ValAPIServiceWeapons[]>> {
        return await this.RequestClient.get('/weapons' + `?language=${this.language}`);
    }

    public async getSkins(): Promise<ValAPIClientService<ValAPIServiceWeaponSkins[]>> {
        return await this.RequestClient.get('/weapons/skins' + `?language=${this.language}`);
    }

    public async getSkinChromas(): Promise<ValAPIClientService<ValAPIServiceWeaponSkinChromas[]>> {
        return await this.RequestClient.get('/weapons/skinchromas' + `?language=${this.language}`);
    }

    public async getSkinLevels(): Promise<ValAPIClientService<ValAPIServiceWeaponSkinLevels[]>> {
        return await this.RequestClient.get('/weapons/skinlevels' + `?language=${this.language}`);
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeapons>> {
        return await this.RequestClient.get(`/weapons/${uuid}` + `?language=${this.language}`);
    }

    public async getSkinByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeaponSkins>> {
        return await this.RequestClient.get(`/weapons/skins/${uuid}` + `?language=${this.language}`);
    }

    public async getSkinChromaByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeaponSkinChromas>> {
        return await this.RequestClient.get(`/weapons/skinchromas/${uuid}` + `?language=${this.language}`);
    }

    public async getSkinLevelByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeaponSkinLevels>> {
        return await this.RequestClient.get(`/weapons/skinlevels/${uuid}` + `?language=${this.language}`);
    }
}

//export

export { Weapons };
export { ValAPIServiceWeapons, ValAPIServiceWeaponSkins, ValAPIServiceWeaponSkinChromas, ValAPIServiceWeaponSkinLevels};