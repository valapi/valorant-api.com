import type { ValRequestClient } from "@valapi/lib";
import type { ValAPIClientService, ValAPIResponse } from "../client/Client";
interface ValAPIServiceWeaponSkinChromas {
    uuid: string;
    displayName: ValAPIResponse<string>;
    displayIcon: string;
    fullRender: string;
    swatch: string;
    streamedVideo: string;
    assetPath: string;
}
interface ValAPIServiceWeaponSkinLevels {
    uuid: string;
    displayName: ValAPIResponse<string>;
    levelItem: string;
    displayIcon: string;
    streamedVideo: string;
    assetPath: string;
}
interface ValAPIServiceWeaponSkins {
    uuid: string;
    displayName: ValAPIResponse<string>;
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
    displayName: ValAPIResponse<string>;
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
        categoryText: ValAPIResponse<string>;
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
declare class Weapons {
    private RequestClient;
    private language;
    constructor(RequestClient: ValRequestClient, language: string);
    get(): Promise<ValAPIClientService<ValAPIServiceWeapons[]>>;
    getSkins(): Promise<ValAPIClientService<ValAPIServiceWeaponSkins[]>>;
    getSkinChromas(): Promise<ValAPIClientService<ValAPIServiceWeaponSkinChromas[]>>;
    getSkinLevels(): Promise<ValAPIClientService<ValAPIServiceWeaponSkinLevels[]>>;
    getByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeapons>>;
    getSkinByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeaponSkins>>;
    getSkinChromaByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeaponSkinChromas>>;
    getSkinLevelByUuid(uuid: string): Promise<ValAPIClientService<ValAPIServiceWeaponSkinLevels>>;
}
export { Weapons };
export { ValAPIServiceWeapons, ValAPIServiceWeaponSkins, ValAPIServiceWeaponSkinChromas, ValAPIServiceWeaponSkinLevels };
