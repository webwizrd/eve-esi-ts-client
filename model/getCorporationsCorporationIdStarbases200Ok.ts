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
export interface GetCorporationsCorporationIdStarbases200Ok { 
    /**
     * The moon this starbase (POS) is anchored on, unanchored POSes do not have this information
     */
    moon_id?: number;
    /**
     * When the POS onlined, for starbases (POSes) in online state
     */
    onlined_since?: Date;
    /**
     * When the POS will be out of reinforcement, for starbases (POSes) in reinforced state
     */
    reinforced_until?: Date;
    /**
     * Unique ID for this starbase (POS)
     */
    starbase_id: number;
    /**
     * state string
     */
    state?: GetCorporationsCorporationIdStarbases200Ok.StateEnum;
    /**
     * The solar system this starbase (POS) is in, unanchored POSes have this information
     */
    system_id: number;
    /**
     * Starbase (POS) type
     */
    type_id: number;
    /**
     * When the POS started unanchoring, for starbases (POSes) in unanchoring state
     */
    unanchor_at?: Date;
}
export namespace GetCorporationsCorporationIdStarbases200Ok {
    export type StateEnum = 'offline' | 'online' | 'onlining' | 'reinforced' | 'unanchoring';
    export const StateEnum = {
        Offline: 'offline' as StateEnum,
        Online: 'online' as StateEnum,
        Onlining: 'onlining' as StateEnum,
        Reinforced: 'reinforced' as StateEnum,
        Unanchoring: 'unanchoring' as StateEnum
    };
}
