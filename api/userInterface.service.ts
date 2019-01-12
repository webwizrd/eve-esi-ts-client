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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { BadRequest } from '../model/badRequest';
import { ErrorLimited } from '../model/errorLimited';
import { Forbidden } from '../model/forbidden';
import { GatewayTimeout } from '../model/gatewayTimeout';
import { InternalServerError } from '../model/internalServerError';
import { PostUiOpenwindowNewmailNewMail } from '../model/postUiOpenwindowNewmailNewMail';
import { PostUiOpenwindowNewmailUnprocessableEntity } from '../model/postUiOpenwindowNewmailUnprocessableEntity';
import { ServiceUnavailable } from '../model/serviceUnavailable';
import { Unauthorized } from '../model/unauthorized';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserInterfaceService {

    protected basePath = 'https://esi.evetech.net/latest';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Set Autopilot Waypoint
     * Set a solar system as autopilot waypoint  --- Alternate route: &#x60;/dev/ui/autopilot/waypoint/&#x60;  Alternate route: &#x60;/v2/ui/autopilot/waypoint/&#x60; 
     * @param add_to_beginning Whether this solar system should be added to the beginning of all waypoints
     * @param clear_other_waypoints Whether clean other waypoints beforing adding this one
     * @param destination_id The destination to travel to, can be solar system, station or structure&#39;s id
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUiAutopilotWaypoint(add_to_beginning: boolean, clear_other_waypoints: boolean, destination_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postUiAutopilotWaypoint(add_to_beginning: boolean, clear_other_waypoints: boolean, destination_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postUiAutopilotWaypoint(add_to_beginning: boolean, clear_other_waypoints: boolean, destination_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postUiAutopilotWaypoint(add_to_beginning: boolean, clear_other_waypoints: boolean, destination_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (add_to_beginning === null || add_to_beginning === undefined) {
            throw new Error('Required parameter add_to_beginning was null or undefined when calling postUiAutopilotWaypoint.');
        }

        if (clear_other_waypoints === null || clear_other_waypoints === undefined) {
            throw new Error('Required parameter clear_other_waypoints was null or undefined when calling postUiAutopilotWaypoint.');
        }

        if (destination_id === null || destination_id === undefined) {
            throw new Error('Required parameter destination_id was null or undefined when calling postUiAutopilotWaypoint.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (add_to_beginning !== undefined && add_to_beginning !== null) {
            queryParameters = queryParameters.set('add_to_beginning', <any>add_to_beginning);
        }
        if (clear_other_waypoints !== undefined && clear_other_waypoints !== null) {
            queryParameters = queryParameters.set('clear_other_waypoints', <any>clear_other_waypoints);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (destination_id !== undefined && destination_id !== null) {
            queryParameters = queryParameters.set('destination_id', <any>destination_id);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<any>(`${this.basePath}/ui/autopilot/waypoint/`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Open Contract Window
     * Open the contract window inside the client  --- Alternate route: &#x60;/dev/ui/openwindow/contract/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/contract/&#x60;  Alternate route: &#x60;/v1/ui/openwindow/contract/&#x60; 
     * @param contract_id The contract to open
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUiOpenwindowContract(contract_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postUiOpenwindowContract(contract_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postUiOpenwindowContract(contract_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postUiOpenwindowContract(contract_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (contract_id === null || contract_id === undefined) {
            throw new Error('Required parameter contract_id was null or undefined when calling postUiOpenwindowContract.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (contract_id !== undefined && contract_id !== null) {
            queryParameters = queryParameters.set('contract_id', <any>contract_id);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<any>(`${this.basePath}/ui/openwindow/contract/`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Open Information Window
     * Open the information window for a character, corporation or alliance inside the client  --- Alternate route: &#x60;/dev/ui/openwindow/information/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/information/&#x60;  Alternate route: &#x60;/v1/ui/openwindow/information/&#x60; 
     * @param target_id The target to open
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUiOpenwindowInformation(target_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postUiOpenwindowInformation(target_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postUiOpenwindowInformation(target_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postUiOpenwindowInformation(target_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (target_id === null || target_id === undefined) {
            throw new Error('Required parameter target_id was null or undefined when calling postUiOpenwindowInformation.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (target_id !== undefined && target_id !== null) {
            queryParameters = queryParameters.set('target_id', <any>target_id);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<any>(`${this.basePath}/ui/openwindow/information/`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Open Market Details
     * Open the market details window for a specific typeID inside the client  --- Alternate route: &#x60;/dev/ui/openwindow/marketdetails/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/marketdetails/&#x60;  Alternate route: &#x60;/v1/ui/openwindow/marketdetails/&#x60; 
     * @param type_id The item type to open in market window
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUiOpenwindowMarketdetails(type_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postUiOpenwindowMarketdetails(type_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postUiOpenwindowMarketdetails(type_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postUiOpenwindowMarketdetails(type_id: number, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (type_id === null || type_id === undefined) {
            throw new Error('Required parameter type_id was null or undefined when calling postUiOpenwindowMarketdetails.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (type_id !== undefined && type_id !== null) {
            queryParameters = queryParameters.set('type_id', <any>type_id);
        }

        let headers = this.defaultHeaders;

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<any>(`${this.basePath}/ui/openwindow/marketdetails/`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Open New Mail Window
     * Open the New Mail window, according to settings from the request if applicable  --- Alternate route: &#x60;/dev/ui/openwindow/newmail/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/newmail/&#x60;  Alternate route: &#x60;/v1/ui/openwindow/newmail/&#x60; 
     * @param new_mail The details of mail to create
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUiOpenwindowNewmail(new_mail: PostUiOpenwindowNewmailNewMail, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postUiOpenwindowNewmail(new_mail: PostUiOpenwindowNewmailNewMail, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postUiOpenwindowNewmail(new_mail: PostUiOpenwindowNewmailNewMail, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postUiOpenwindowNewmail(new_mail: PostUiOpenwindowNewmailNewMail, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (new_mail === null || new_mail === undefined) {
            throw new Error('Required parameter new_mail was null or undefined when calling postUiOpenwindowNewmail.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/ui/openwindow/newmail/`,
            new_mail,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
