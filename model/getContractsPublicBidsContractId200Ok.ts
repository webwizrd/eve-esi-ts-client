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
export interface GetContractsPublicBidsContractId200Ok { 
    /**
     * The amount bid, in ISK
     */
    amount: number;
    /**
     * Unique ID for the bid
     */
    bid_id: number;
    /**
     * Datetime when the bid was placed
     */
    date_bid: Date;
}
