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
 * market object
 */
export interface GetCharactersCharacterIdStatsMarket { 
    /**
     * accept_contracts_courier integer
     */
    accept_contracts_courier?: number;
    /**
     * accept_contracts_item_exchange integer
     */
    accept_contracts_item_exchange?: number;
    /**
     * buy_orders_placed integer
     */
    buy_orders_placed?: number;
    /**
     * cancel_market_order integer
     */
    cancel_market_order?: number;
    /**
     * create_contracts_auction integer
     */
    create_contracts_auction?: number;
    /**
     * create_contracts_courier integer
     */
    create_contracts_courier?: number;
    /**
     * create_contracts_item_exchange integer
     */
    create_contracts_item_exchange?: number;
    /**
     * deliver_courier_contract integer
     */
    deliver_courier_contract?: number;
    /**
     * isk_gained integer
     */
    isk_gained?: number;
    /**
     * isk_spent integer
     */
    isk_spent?: number;
    /**
     * modify_market_order integer
     */
    modify_market_order?: number;
    /**
     * search_contracts integer
     */
    search_contracts?: number;
    /**
     * sell_orders_placed integer
     */
    sell_orders_placed?: number;
}
