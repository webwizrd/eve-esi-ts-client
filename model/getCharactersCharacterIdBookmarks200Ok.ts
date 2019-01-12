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
import { GetCharactersCharacterIdBookmarksCoordinates } from './getCharactersCharacterIdBookmarksCoordinates';
import { GetCharactersCharacterIdBookmarksItem } from './getCharactersCharacterIdBookmarksItem';


/**
 * 200 ok object
 */
export interface GetCharactersCharacterIdBookmarks200Ok { 
    /**
     * bookmark_id integer
     */
    bookmark_id: number;
    coordinates?: GetCharactersCharacterIdBookmarksCoordinates;
    /**
     * created string
     */
    created: Date;
    /**
     * creator_id integer
     */
    creator_id: number;
    /**
     * folder_id integer
     */
    folder_id?: number;
    item?: GetCharactersCharacterIdBookmarksItem;
    /**
     * label string
     */
    label: string;
    /**
     * location_id integer
     */
    location_id: number;
    /**
     * notes string
     */
    notes: string;
}