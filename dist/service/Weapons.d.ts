import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClient } from "../client/Client";
declare namespace Weapons {
    interface WeaponSkinChromas {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        displayIcon: string;
        fullRender: string;
        swatch: string;
        streamedVideo: string;
        assetPath: string;
    }
    interface WeaponSkinLevels {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        levelItem: string;
        displayIcon: string;
        streamedVideo: string;
        assetPath: string;
    }
    interface WeaponSkins {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
        themeUuid: string;
        contentTierUuid: string;
        displayIcon: string;
        wallpaper: string;
        assetPath: string;
        chromas: Array<Weapons.WeaponSkinChromas>;
        levels: Array<Weapons.WeaponSkinLevels>;
    }
    interface Weapons {
        uuid: string;
        displayName: ValAPIClient.Response<string>;
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
            categoryText: ValAPIClient.Response<string>;
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
declare class Weapons {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClient.Service<Weapons.Weapons[]>>;
    getSkins(): Promise<ValAPIClient.Service<Weapons.WeaponSkins[]>>;
    getSkinChromas(): Promise<ValAPIClient.Service<Weapons.WeaponSkinChromas[]>>;
    getSkinLevels(): Promise<ValAPIClient.Service<Weapons.WeaponSkinLevels[]>>;
    getByUuid(uuid: string): Promise<ValAPIClient.Service<Weapons.Weapons>>;
    getSkinByUuid(uuid: string): Promise<ValAPIClient.Service<Weapons.WeaponSkins>>;
    getSkinChromaByUuid(uuid: string): Promise<ValAPIClient.Service<Weapons.WeaponSkinChromas>>;
    getSkinLevelByUuid(uuid: string): Promise<ValAPIClient.Service<Weapons.WeaponSkinLevels>>;
}
export { Weapons };
