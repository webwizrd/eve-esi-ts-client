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
export interface GetUniverseAncestries200Ok { 
    /**
     * The bloodline associated with this ancestry
     */
    bloodline_id: number;
    /**
     * description string
     */
    description: string;
    /**
     * icon_id integer
     */
    icon_id?: number;
    /**
     * id integer
     */
    id: number;
    /**
     * name string
     */
    name: string;
    /**
     * short_description string
     */
    short_description?: string;
}