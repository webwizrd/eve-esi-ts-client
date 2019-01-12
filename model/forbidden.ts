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
 * Forbidden model
 */
export interface Forbidden { 
    /**
     * Forbidden message
     */
    error: string;
    /**
     * status code received from SSO
     */
    sso_status?: number;
}