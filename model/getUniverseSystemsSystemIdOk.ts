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
import { GetUniverseSystemsSystemIdPlanet } from './getUniverseSystemsSystemIdPlanet';
import { GetUniverseSystemsSystemIdPosition } from './getUniverseSystemsSystemIdPosition';


/**
 * 200 ok object
 */
export interface GetUniverseSystemsSystemIdOk { 
    /**
     * The constellation this solar system is in
     */
    constellation_id: number;
    /**
     * name string
     */
    name: string;
    /**
     * planets array
     */
    planets?: Array<GetUniverseSystemsSystemIdPlanet>;
    position: GetUniverseSystemsSystemIdPosition;
    /**
     * security_class string
     */
    security_class?: string;
    /**
     * security_status number
     */
    security_status: number;
    /**
     * star_id integer
     */
    star_id?: number;
    /**
     * stargates array
     */
    stargates?: Array<number>;
    /**
     * stations array
     */
    stations?: Array<number>;
    /**
     * system_id integer
     */
    system_id: number;
}
