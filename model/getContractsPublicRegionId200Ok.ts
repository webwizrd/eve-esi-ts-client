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
export interface GetContractsPublicRegionId200Ok { 
    /**
     * Buyout price (for Auctions only)
     */
    buyout?: number;
    /**
     * Collateral price (for Couriers only)
     */
    collateral?: number;
    /**
     * contract_id integer
     */
    contract_id: number;
    /**
     * Expiration date of the contract
     */
    date_expired: Date;
    /**
     * Сreation date of the contract
     */
    date_issued: Date;
    /**
     * Number of days to perform the contract
     */
    days_to_complete?: number;
    /**
     * End location ID (for Couriers contract)
     */
    end_location_id?: number;
    /**
     * true if the contract was issued on behalf of the issuer's corporation
     */
    for_corporation?: boolean;
    /**
     * Character's corporation ID for the issuer
     */
    issuer_corporation_id: number;
    /**
     * Character ID for the issuer
     */
    issuer_id: number;
    /**
     * Price of contract (for ItemsExchange and Auctions)
     */
    price?: number;
    /**
     * Remuneration for contract (for Couriers only)
     */
    reward?: number;
    /**
     * Start location ID (for Couriers contract)
     */
    start_location_id?: number;
    /**
     * Title of the contract
     */
    title?: string;
    /**
     * Type of the contract
     */
    type: GetContractsPublicRegionId200Ok.TypeEnum;
    /**
     * Volume of items in the contract
     */
    volume?: number;
}
export namespace GetContractsPublicRegionId200Ok {
    export type TypeEnum = 'unknown' | 'item_exchange' | 'auction' | 'courier' | 'loan';
    export const TypeEnum = {
        Unknown: 'unknown' as TypeEnum,
        ItemExchange: 'item_exchange' as TypeEnum,
        Auction: 'auction' as TypeEnum,
        Courier: 'courier' as TypeEnum,
        Loan: 'loan' as TypeEnum
    };
}
