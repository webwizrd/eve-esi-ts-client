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
export interface GetCharactersCharacterIdIndustryJobs200Ok { 
    /**
     * Job activity ID
     */
    activity_id: number;
    /**
     * blueprint_id integer
     */
    blueprint_id: number;
    /**
     * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
     */
    blueprint_location_id: number;
    /**
     * blueprint_type_id integer
     */
    blueprint_type_id: number;
    /**
     * ID of the character which completed this job
     */
    completed_character_id?: number;
    /**
     * Date and time when this job was completed
     */
    completed_date?: Date;
    /**
     * The sume of job installation fee and industry facility tax
     */
    cost?: number;
    /**
     * Job duration in seconds
     */
    duration: number;
    /**
     * Date and time when this job finished
     */
    end_date: Date;
    /**
     * ID of the facility where this job is running
     */
    facility_id: number;
    /**
     * ID of the character which installed this job
     */
    installer_id: number;
    /**
     * Unique job ID
     */
    job_id: number;
    /**
     * Number of runs blueprint is licensed for
     */
    licensed_runs?: number;
    /**
     * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
     */
    output_location_id: number;
    /**
     * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
     */
    pause_date?: Date;
    /**
     * Chance of success for invention
     */
    probability?: number;
    /**
     * Type ID of product (manufactured, copied or invented)
     */
    product_type_id?: number;
    /**
     * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
     */
    runs: number;
    /**
     * Date and time when this job started
     */
    start_date: Date;
    /**
     * ID of the station where industry facility is located
     */
    station_id: number;
    /**
     * status string
     */
    status: GetCharactersCharacterIdIndustryJobs200Ok.StatusEnum;
    /**
     * Number of successful runs for this job. Equal to runs unless this is an invention job
     */
    successful_runs?: number;
}
export namespace GetCharactersCharacterIdIndustryJobs200Ok {
    export type StatusEnum = 'active' | 'cancelled' | 'delivered' | 'paused' | 'ready' | 'reverted';
    export const StatusEnum = {
        Active: 'active' as StatusEnum,
        Cancelled: 'cancelled' as StatusEnum,
        Delivered: 'delivered' as StatusEnum,
        Paused: 'paused' as StatusEnum,
        Ready: 'ready' as StatusEnum,
        Reverted: 'reverted' as StatusEnum
    };
}
