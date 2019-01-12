/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.8.6
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * 200 ok object
 */
export interface GetCorporationsCorporationIdContainersLogs200Ok { 
    /**
     * action string
     */
    action: GetCorporationsCorporationIdContainersLogs200Ok.ActionEnum;
    /**
     * ID of the character who performed the action.
     */
    character_id: number;
    /**
     * ID of the container
     */
    container_id: number;
    /**
     * Type ID of the container
     */
    container_type_id: number;
    /**
     * location_flag string
     */
    location_flag: GetCorporationsCorporationIdContainersLogs200Ok.LocationFlagEnum;
    /**
     * location_id integer
     */
    location_id: number;
    /**
     * Timestamp when this log was created
     */
    logged_at: Date;
    /**
     * new_config_bitmask integer
     */
    new_config_bitmask?: number;
    /**
     * old_config_bitmask integer
     */
    old_config_bitmask?: number;
    /**
     * Type of password set if action is of type SetPassword or EnterPassword
     */
    password_type?: GetCorporationsCorporationIdContainersLogs200Ok.PasswordTypeEnum;
    /**
     * Quantity of the item being acted upon
     */
    quantity?: number;
    /**
     * Type ID of the item being acted upon
     */
    type_id?: number;
}
export namespace GetCorporationsCorporationIdContainersLogs200Ok {
    export type ActionEnum = 'add' | 'assemble' | 'configure' | 'enter_password' | 'lock' | 'move' | 'repackage' | 'set_name' | 'set_password' | 'unlock';
    export const ActionEnum = {
        Add: 'add' as ActionEnum,
        Assemble: 'assemble' as ActionEnum,
        Configure: 'configure' as ActionEnum,
        EnterPassword: 'enter_password' as ActionEnum,
        Lock: 'lock' as ActionEnum,
        Move: 'move' as ActionEnum,
        Repackage: 'repackage' as ActionEnum,
        SetName: 'set_name' as ActionEnum,
        SetPassword: 'set_password' as ActionEnum,
        Unlock: 'unlock' as ActionEnum
    };
    export type LocationFlagEnum = 'AssetSafety' | 'AutoFit' | 'Bonus' | 'Booster' | 'BoosterBay' | 'Capsule' | 'Cargo' | 'CorpDeliveries' | 'CorpSAG1' | 'CorpSAG2' | 'CorpSAG3' | 'CorpSAG4' | 'CorpSAG5' | 'CorpSAG6' | 'CorpSAG7' | 'CrateLoot' | 'Deliveries' | 'DroneBay' | 'DustBattle' | 'DustDatabank' | 'FighterBay' | 'FighterTube0' | 'FighterTube1' | 'FighterTube2' | 'FighterTube3' | 'FighterTube4' | 'FleetHangar' | 'Hangar' | 'HangarAll' | 'HiSlot0' | 'HiSlot1' | 'HiSlot2' | 'HiSlot3' | 'HiSlot4' | 'HiSlot5' | 'HiSlot6' | 'HiSlot7' | 'HiddenModifiers' | 'Implant' | 'Impounded' | 'JunkyardReprocessed' | 'JunkyardTrashed' | 'LoSlot0' | 'LoSlot1' | 'LoSlot2' | 'LoSlot3' | 'LoSlot4' | 'LoSlot5' | 'LoSlot6' | 'LoSlot7' | 'Locked' | 'MedSlot0' | 'MedSlot1' | 'MedSlot2' | 'MedSlot3' | 'MedSlot4' | 'MedSlot5' | 'MedSlot6' | 'MedSlot7' | 'OfficeFolder' | 'Pilot' | 'PlanetSurface' | 'QuafeBay' | 'Reward' | 'RigSlot0' | 'RigSlot1' | 'RigSlot2' | 'RigSlot3' | 'RigSlot4' | 'RigSlot5' | 'RigSlot6' | 'RigSlot7' | 'SecondaryStorage' | 'ServiceSlot0' | 'ServiceSlot1' | 'ServiceSlot2' | 'ServiceSlot3' | 'ServiceSlot4' | 'ServiceSlot5' | 'ServiceSlot6' | 'ServiceSlot7' | 'ShipHangar' | 'ShipOffline' | 'Skill' | 'SkillInTraining' | 'SpecializedAmmoHold' | 'SpecializedCommandCenterHold' | 'SpecializedFuelBay' | 'SpecializedGasHold' | 'SpecializedIndustrialShipHold' | 'SpecializedLargeShipHold' | 'SpecializedMaterialBay' | 'SpecializedMediumShipHold' | 'SpecializedMineralHold' | 'SpecializedOreHold' | 'SpecializedPlanetaryCommoditiesHold' | 'SpecializedSalvageHold' | 'SpecializedShipHold' | 'SpecializedSmallShipHold' | 'StructureActive' | 'StructureFuel' | 'StructureInactive' | 'StructureOffline' | 'SubSystemBay' | 'SubSystemSlot0' | 'SubSystemSlot1' | 'SubSystemSlot2' | 'SubSystemSlot3' | 'SubSystemSlot4' | 'SubSystemSlot5' | 'SubSystemSlot6' | 'SubSystemSlot7' | 'Unlocked' | 'Wallet' | 'Wardrobe';
    export const LocationFlagEnum = {
        AssetSafety: 'AssetSafety' as LocationFlagEnum,
        AutoFit: 'AutoFit' as LocationFlagEnum,
        Bonus: 'Bonus' as LocationFlagEnum,
        Booster: 'Booster' as LocationFlagEnum,
        BoosterBay: 'BoosterBay' as LocationFlagEnum,
        Capsule: 'Capsule' as LocationFlagEnum,
        Cargo: 'Cargo' as LocationFlagEnum,
        CorpDeliveries: 'CorpDeliveries' as LocationFlagEnum,
        CorpSAG1: 'CorpSAG1' as LocationFlagEnum,
        CorpSAG2: 'CorpSAG2' as LocationFlagEnum,
        CorpSAG3: 'CorpSAG3' as LocationFlagEnum,
        CorpSAG4: 'CorpSAG4' as LocationFlagEnum,
        CorpSAG5: 'CorpSAG5' as LocationFlagEnum,
        CorpSAG6: 'CorpSAG6' as LocationFlagEnum,
        CorpSAG7: 'CorpSAG7' as LocationFlagEnum,
        CrateLoot: 'CrateLoot' as LocationFlagEnum,
        Deliveries: 'Deliveries' as LocationFlagEnum,
        DroneBay: 'DroneBay' as LocationFlagEnum,
        DustBattle: 'DustBattle' as LocationFlagEnum,
        DustDatabank: 'DustDatabank' as LocationFlagEnum,
        FighterBay: 'FighterBay' as LocationFlagEnum,
        FighterTube0: 'FighterTube0' as LocationFlagEnum,
        FighterTube1: 'FighterTube1' as LocationFlagEnum,
        FighterTube2: 'FighterTube2' as LocationFlagEnum,
        FighterTube3: 'FighterTube3' as LocationFlagEnum,
        FighterTube4: 'FighterTube4' as LocationFlagEnum,
        FleetHangar: 'FleetHangar' as LocationFlagEnum,
        Hangar: 'Hangar' as LocationFlagEnum,
        HangarAll: 'HangarAll' as LocationFlagEnum,
        HiSlot0: 'HiSlot0' as LocationFlagEnum,
        HiSlot1: 'HiSlot1' as LocationFlagEnum,
        HiSlot2: 'HiSlot2' as LocationFlagEnum,
        HiSlot3: 'HiSlot3' as LocationFlagEnum,
        HiSlot4: 'HiSlot4' as LocationFlagEnum,
        HiSlot5: 'HiSlot5' as LocationFlagEnum,
        HiSlot6: 'HiSlot6' as LocationFlagEnum,
        HiSlot7: 'HiSlot7' as LocationFlagEnum,
        HiddenModifiers: 'HiddenModifiers' as LocationFlagEnum,
        Implant: 'Implant' as LocationFlagEnum,
        Impounded: 'Impounded' as LocationFlagEnum,
        JunkyardReprocessed: 'JunkyardReprocessed' as LocationFlagEnum,
        JunkyardTrashed: 'JunkyardTrashed' as LocationFlagEnum,
        LoSlot0: 'LoSlot0' as LocationFlagEnum,
        LoSlot1: 'LoSlot1' as LocationFlagEnum,
        LoSlot2: 'LoSlot2' as LocationFlagEnum,
        LoSlot3: 'LoSlot3' as LocationFlagEnum,
        LoSlot4: 'LoSlot4' as LocationFlagEnum,
        LoSlot5: 'LoSlot5' as LocationFlagEnum,
        LoSlot6: 'LoSlot6' as LocationFlagEnum,
        LoSlot7: 'LoSlot7' as LocationFlagEnum,
        Locked: 'Locked' as LocationFlagEnum,
        MedSlot0: 'MedSlot0' as LocationFlagEnum,
        MedSlot1: 'MedSlot1' as LocationFlagEnum,
        MedSlot2: 'MedSlot2' as LocationFlagEnum,
        MedSlot3: 'MedSlot3' as LocationFlagEnum,
        MedSlot4: 'MedSlot4' as LocationFlagEnum,
        MedSlot5: 'MedSlot5' as LocationFlagEnum,
        MedSlot6: 'MedSlot6' as LocationFlagEnum,
        MedSlot7: 'MedSlot7' as LocationFlagEnum,
        OfficeFolder: 'OfficeFolder' as LocationFlagEnum,
        Pilot: 'Pilot' as LocationFlagEnum,
        PlanetSurface: 'PlanetSurface' as LocationFlagEnum,
        QuafeBay: 'QuafeBay' as LocationFlagEnum,
        Reward: 'Reward' as LocationFlagEnum,
        RigSlot0: 'RigSlot0' as LocationFlagEnum,
        RigSlot1: 'RigSlot1' as LocationFlagEnum,
        RigSlot2: 'RigSlot2' as LocationFlagEnum,
        RigSlot3: 'RigSlot3' as LocationFlagEnum,
        RigSlot4: 'RigSlot4' as LocationFlagEnum,
        RigSlot5: 'RigSlot5' as LocationFlagEnum,
        RigSlot6: 'RigSlot6' as LocationFlagEnum,
        RigSlot7: 'RigSlot7' as LocationFlagEnum,
        SecondaryStorage: 'SecondaryStorage' as LocationFlagEnum,
        ServiceSlot0: 'ServiceSlot0' as LocationFlagEnum,
        ServiceSlot1: 'ServiceSlot1' as LocationFlagEnum,
        ServiceSlot2: 'ServiceSlot2' as LocationFlagEnum,
        ServiceSlot3: 'ServiceSlot3' as LocationFlagEnum,
        ServiceSlot4: 'ServiceSlot4' as LocationFlagEnum,
        ServiceSlot5: 'ServiceSlot5' as LocationFlagEnum,
        ServiceSlot6: 'ServiceSlot6' as LocationFlagEnum,
        ServiceSlot7: 'ServiceSlot7' as LocationFlagEnum,
        ShipHangar: 'ShipHangar' as LocationFlagEnum,
        ShipOffline: 'ShipOffline' as LocationFlagEnum,
        Skill: 'Skill' as LocationFlagEnum,
        SkillInTraining: 'SkillInTraining' as LocationFlagEnum,
        SpecializedAmmoHold: 'SpecializedAmmoHold' as LocationFlagEnum,
        SpecializedCommandCenterHold: 'SpecializedCommandCenterHold' as LocationFlagEnum,
        SpecializedFuelBay: 'SpecializedFuelBay' as LocationFlagEnum,
        SpecializedGasHold: 'SpecializedGasHold' as LocationFlagEnum,
        SpecializedIndustrialShipHold: 'SpecializedIndustrialShipHold' as LocationFlagEnum,
        SpecializedLargeShipHold: 'SpecializedLargeShipHold' as LocationFlagEnum,
        SpecializedMaterialBay: 'SpecializedMaterialBay' as LocationFlagEnum,
        SpecializedMediumShipHold: 'SpecializedMediumShipHold' as LocationFlagEnum,
        SpecializedMineralHold: 'SpecializedMineralHold' as LocationFlagEnum,
        SpecializedOreHold: 'SpecializedOreHold' as LocationFlagEnum,
        SpecializedPlanetaryCommoditiesHold: 'SpecializedPlanetaryCommoditiesHold' as LocationFlagEnum,
        SpecializedSalvageHold: 'SpecializedSalvageHold' as LocationFlagEnum,
        SpecializedShipHold: 'SpecializedShipHold' as LocationFlagEnum,
        SpecializedSmallShipHold: 'SpecializedSmallShipHold' as LocationFlagEnum,
        StructureActive: 'StructureActive' as LocationFlagEnum,
        StructureFuel: 'StructureFuel' as LocationFlagEnum,
        StructureInactive: 'StructureInactive' as LocationFlagEnum,
        StructureOffline: 'StructureOffline' as LocationFlagEnum,
        SubSystemBay: 'SubSystemBay' as LocationFlagEnum,
        SubSystemSlot0: 'SubSystemSlot0' as LocationFlagEnum,
        SubSystemSlot1: 'SubSystemSlot1' as LocationFlagEnum,
        SubSystemSlot2: 'SubSystemSlot2' as LocationFlagEnum,
        SubSystemSlot3: 'SubSystemSlot3' as LocationFlagEnum,
        SubSystemSlot4: 'SubSystemSlot4' as LocationFlagEnum,
        SubSystemSlot5: 'SubSystemSlot5' as LocationFlagEnum,
        SubSystemSlot6: 'SubSystemSlot6' as LocationFlagEnum,
        SubSystemSlot7: 'SubSystemSlot7' as LocationFlagEnum,
        Unlocked: 'Unlocked' as LocationFlagEnum,
        Wallet: 'Wallet' as LocationFlagEnum,
        Wardrobe: 'Wardrobe' as LocationFlagEnum
    };
    export type PasswordTypeEnum = 'config' | 'general';
    export const PasswordTypeEnum = {
        Config: 'config' as PasswordTypeEnum,
        General: 'general' as PasswordTypeEnum
    };
}
