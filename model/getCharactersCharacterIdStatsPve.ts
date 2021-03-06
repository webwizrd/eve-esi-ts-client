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
 * pve object
 */
export interface GetCharactersCharacterIdStatsPve { 
    /**
     * dungeons_completed_agent integer
     */
    dungeons_completed_agent?: number;
    /**
     * dungeons_completed_distribution integer
     */
    dungeons_completed_distribution?: number;
    /**
     * missions_succeeded integer
     */
    missions_succeeded?: number;
    /**
     * missions_succeeded_epic_arc integer
     */
    missions_succeeded_epic_arc?: number;
}
