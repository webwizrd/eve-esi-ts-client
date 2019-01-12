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
export interface GetCorporationsCorporationIdMembertracking200Ok { 
    /**
     * base_id integer
     */
    base_id?: number;
    /**
     * character_id integer
     */
    character_id: number;
    /**
     * location_id integer
     */
    location_id?: number;
    /**
     * logoff_date string
     */
    logoff_date?: Date;
    /**
     * logon_date string
     */
    logon_date?: Date;
    /**
     * ship_type_id integer
     */
    ship_type_id?: number;
    /**
     * start_date string
     */
    start_date?: Date;
}
