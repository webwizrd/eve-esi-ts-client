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
import { GetUniversePlanetsPlanetIdPosition } from './getUniversePlanetsPlanetIdPosition';


/**
 * 200 ok object
 */
export interface GetUniversePlanetsPlanetIdOk { 
    /**
     * name string
     */
    name: string;
    /**
     * planet_id integer
     */
    planet_id: number;
    position: GetUniversePlanetsPlanetIdPosition;
    /**
     * The solar system this planet is in
     */
    system_id: number;
    /**
     * type_id integer
     */
    type_id: number;
}
