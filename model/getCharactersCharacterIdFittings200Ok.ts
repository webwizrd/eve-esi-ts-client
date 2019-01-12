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
import { GetCharactersCharacterIdFittingsItem } from './getCharactersCharacterIdFittingsItem';


/**
 * 200 ok object
 */
export interface GetCharactersCharacterIdFittings200Ok { 
    /**
     * description string
     */
    description: string;
    /**
     * fitting_id integer
     */
    fitting_id: number;
    /**
     * items array
     */
    items: Array<GetCharactersCharacterIdFittingsItem>;
    /**
     * name string
     */
    name: string;
    /**
     * ship_type_id integer
     */
    ship_type_id: number;
}
