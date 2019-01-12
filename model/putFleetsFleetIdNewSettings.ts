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
 * new_settings object
 */
export interface PutFleetsFleetIdNewSettings { 
    /**
     * Should free-move be enabled in the fleet
     */
    is_free_move?: boolean;
    /**
     * New fleet MOTD in CCP flavoured HTML
     */
    motd?: string;
}
