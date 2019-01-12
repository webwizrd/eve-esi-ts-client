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
import { GetKillmailsKillmailIdKillmailHashItemsItem } from './getKillmailsKillmailIdKillmailHashItemsItem';


/**
 * item object
 */
export interface GetKillmailsKillmailIdKillmailHashItem { 
    /**
     * Flag for the location of the item 
     */
    flag: number;
    /**
     * item_type_id integer
     */
    item_type_id: number;
    /**
     * items array
     */
    items?: Array<GetKillmailsKillmailIdKillmailHashItemsItem>;
    /**
     * How many of the item were destroyed if any 
     */
    quantity_destroyed?: number;
    /**
     * How many of the item were dropped if any 
     */
    quantity_dropped?: number;
    /**
     * singleton integer
     */
    singleton: number;
}