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
 * jump_clone object
 */
export interface GetCharactersCharacterIdClonesJumpClone { 
    /**
     * implants array
     */
    implants: Array<number>;
    /**
     * jump_clone_id integer
     */
    jump_clone_id: number;
    /**
     * location_id integer
     */
    location_id: number;
    /**
     * location_type string
     */
    location_type: GetCharactersCharacterIdClonesJumpClone.LocationTypeEnum;
    /**
     * name string
     */
    name?: string;
}
export namespace GetCharactersCharacterIdClonesJumpClone {
    export type LocationTypeEnum = 'station' | 'structure';
    export const LocationTypeEnum = {
        Station: 'station' as LocationTypeEnum,
        Structure: 'structure' as LocationTypeEnum
    };
}
