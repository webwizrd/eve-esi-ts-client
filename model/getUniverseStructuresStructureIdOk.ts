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
import { GetUniverseStructuresStructureIdPosition } from './getUniverseStructuresStructureIdPosition';


/**
 * 200 ok object
 */
export interface GetUniverseStructuresStructureIdOk { 
    /**
     * The full name of the structure
     */
    name: string;
    /**
     * The ID of the corporation who owns this particular structure
     */
    owner_id: number;
    position?: GetUniverseStructuresStructureIdPosition;
    /**
     * solar_system_id integer
     */
    solar_system_id: number;
    /**
     * type_id integer
     */
    type_id?: number;
}
