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
export interface GetDogmaAttributesAttributeIdOk { 
    /**
     * attribute_id integer
     */
    attribute_id: number;
    /**
     * default_value number
     */
    default_value?: number;
    /**
     * description string
     */
    description?: string;
    /**
     * display_name string
     */
    display_name?: string;
    /**
     * high_is_good boolean
     */
    high_is_good?: boolean;
    /**
     * icon_id integer
     */
    icon_id?: number;
    /**
     * name string
     */
    name?: string;
    /**
     * published boolean
     */
    published?: boolean;
    /**
     * stackable boolean
     */
    stackable?: boolean;
    /**
     * unit_id integer
     */
    unit_id?: number;
}