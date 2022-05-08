//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceWeaponSkinChromas {
    uuid: string;
    displayName: string; //localized
    displayIcon: string;
    fullRender: string;
    swatch: string;
    streamedVideo: string;
    assetPath: string;
}

interface ValAPIServiceWeaponSkinLevels {
    uuid: string;
    displayName: string; //localized
    levelItem: string;
    displayIcon: string;
    streamedVideo: string;
    assetPath: string;
}

interface ValAPIServiceWeaponSkins {
    uuid: string;
    displayName: string;
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
    displayName: string; //localized
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
        categoryText: string; //localized
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
    private AxiosClient: AxiosClient;

    constructor(AxiosClient: AxiosClient) {
        this.AxiosClient = AxiosClient;
    }

    //service

    public async get(): Promise<ValAPIClientService<ValAPIServiceWeapons[]>> {
        return await this.AxiosClient.request('/weapons');
    }

    public async getSkins(): Promise<ValAPIClientService<ValAPIServiceWeaponSkins[]>> {
        return await this.AxiosClient.request('/weapons/skins');
    }

    public async getSkinChromas(): Promise<ValAPIClientService<ValAPIServiceWeaponSkinChromas[]>> {
        return await this.AxiosClient.request('/weapons/skinchromas');
    }

    public async getSkinLevels(): Promise<ValAPIClientService<ValAPIServiceWeaponSkinLevels[]>> {
        return await this.AxiosClient.request('/weapons/skinlevels');
    }

    public async getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeapons>> {
        return await this.AxiosClient.request(`/weapons/${uuid}`);
    }

    public async getSkinByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeaponSkins>> {
        return await this.AxiosClient.request(`/weapons/skins/${uuid}`);
    }

    public async getSkinChromaByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeaponSkinChromas>> {
        return await this.AxiosClient.request(`/weapons/skinchromas/${uuid}`);
    }

    public async getSkinLevelByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeaponSkinLevels>> {
        return await this.AxiosClient.request(`/weapons/skinlevels/${uuid}`);
    }
}

//export

export { Weapons };
export { ValAPIServiceWeapons, ValAPIServiceWeaponSkins, ValAPIServiceWeaponSkinChromas, ValAPIServiceWeaponSkinLevels};