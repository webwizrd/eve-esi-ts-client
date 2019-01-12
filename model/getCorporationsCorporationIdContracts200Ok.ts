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
export interface GetCorporationsCorporationIdContracts200Ok { 
    /**
     * Who will accept the contract
     */
    acceptor_id: number;
    /**
     * ID to whom the contract is assigned, can be corporation or character ID
     */
    assignee_id: number;
    /**
     * To whom the contract is available
     */
    availability: GetCorporationsCorporationIdContracts200Ok.AvailabilityEnum;
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
     * Date of confirmation of contract
     */
    date_accepted?: Date;
    /**
     * Date of completed of contract
     */
    date_completed?: Date;
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
    for_corporation: boolean;
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
     * Status of the the contract
     */
    status: GetCorporationsCorporationIdContracts200Ok.StatusEnum;
    /**
     * Title of the contract
     */
    title?: string;
    /**
     * Type of the contract
     */
    type: GetCorporationsCorporationIdContracts200Ok.TypeEnum;
    /**
     * Volume of items in the contract
     */
    volume?: number;
}
export namespace GetCorporationsCorporationIdContracts200Ok {
    export type AvailabilityEnum = 'public' | 'personal' | 'corporation' | 'alliance';
    export const AvailabilityEnum = {
        Public: 'public' as AvailabilityEnum,
        Personal: 'personal' as AvailabilityEnum,
        Corporation: 'corporation' as AvailabilityEnum,
        Alliance: 'alliance' as AvailabilityEnum
    };
    export type StatusEnum = 'outstanding' | 'in_progress' | 'finished_issuer' | 'finished_contractor' | 'finished' | 'cancelled' | 'rejected' | 'failed' | 'deleted' | 'reversed';
    export const StatusEnum = {
        Outstanding: 'outstanding' as StatusEnum,
        InProgress: 'in_progress' as StatusEnum,
        FinishedIssuer: 'finished_issuer' as StatusEnum,
        FinishedContractor: 'finished_contractor' as StatusEnum,
        Finished: 'finished' as StatusEnum,
        Cancelled: 'cancelled' as StatusEnum,
        Rejected: 'rejected' as StatusEnum,
        Failed: 'failed' as StatusEnum,
        Deleted: 'deleted' as StatusEnum,
        Reversed: 'reversed' as StatusEnum
    };
    export type TypeEnum = 'unknown' | 'item_exchange' | 'auction' | 'courier' | 'loan';
    export const TypeEnum = {
        Unknown: 'unknown' as TypeEnum,
        ItemExchange: 'item_exchange' as TypeEnum,
        Auction: 'auction' as TypeEnum,
        Courier: 'courier' as TypeEnum,
        Loan: 'loan' as TypeEnum
    };
}
