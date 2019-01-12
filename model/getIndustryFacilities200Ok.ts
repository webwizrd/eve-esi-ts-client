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
export interface GetIndustryFacilities200Ok { 
    /**
     * ID of the facility
     */
    facility_id: number;
    /**
     * Owner of the facility
     */
    owner_id: number;
    /**
     * Region ID where the facility is
     */
    region_id: number;
    /**
     * Solar system ID where the facility is
     */
    solar_system_id: number;
    /**
     * Tax imposed by the facility
     */
    tax?: number;
    /**
     * Type ID of the facility
     */
    type_id: number;
}
