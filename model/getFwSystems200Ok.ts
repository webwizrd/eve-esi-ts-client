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
export interface GetFwSystems200Ok { 
    /**
     * contested string
     */
    contested: GetFwSystems200Ok.ContestedEnum;
    /**
     * occupier_faction_id integer
     */
    occupier_faction_id: number;
    /**
     * owner_faction_id integer
     */
    owner_faction_id: number;
    /**
     * solar_system_id integer
     */
    solar_system_id: number;
    /**
     * victory_points integer
     */
    victory_points: number;
    /**
     * victory_points_threshold integer
     */
    victory_points_threshold: number;
}
export namespace GetFwSystems200Ok {
    export type ContestedEnum = 'captured' | 'contested' | 'uncontested' | 'vulnerable';
    export const ContestedEnum = {
        Captured: 'captured' as ContestedEnum,
        Contested: 'contested' as ContestedEnum,
        Uncontested: 'uncontested' as ContestedEnum,
        Vulnerable: 'vulnerable' as ContestedEnum
    };
}
