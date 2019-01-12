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
export interface GetCharactersCharacterIdContractsContractIdItems200Ok { 
    /**
     * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
     */
    is_included: boolean;
    /**
     * is_singleton boolean
     */
    is_singleton: boolean;
    /**
     * Number of items in the stack
     */
    quantity: number;
    /**
     * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
     */
    raw_quantity?: number;
    /**
     * Unique ID for the item
     */
    record_id: number;
    /**
     * Type ID for item
     */
    type_id: number;
}
