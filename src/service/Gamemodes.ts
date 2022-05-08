//import

import type { AxiosClient } from "../client/AxiosClient";
import type { ValAPIClientService } from "../client/Client";

//interface

interface ValAPIServiceGamemodes {
    uuid: string;
    displayName: string; //localized
    duration: number; //localized
    allowsMatchTimeouts: boolean;
    isTeamVoiceAllowed: boolean;
    isMinimapHidden: boolean;
    orbCount: number;
    teamRoles: Array<string>;
    gameFeatureOverrides: Array<{
        featureName: string;
        state: boolean;
    }>;
    gameRuleBoolOverrides: Array<{
        ruleName: string;
        state: boolean;
    }>;
    displayIcon: string;
    assetPath: string;
}

interface ValAPIServiceGamemodesEquippables {
    uuid: string;
    displayName: string; //localized
    category: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
}