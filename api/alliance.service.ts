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
import { GatewayTimeout } from '../model/gatewayTimeout';
import { GetAlliancesAllianceIdIconsNotFound } from '../model/getAlliancesAllianceIdIconsNotFound';
import { GetAlliancesAllianceIdIconsOk } from '../model/getAlliancesAllianceIdIconsOk';
import { GetAlliancesAllianceIdNotFound } from '../model/getAlliancesAllianceIdNotFound';
import { GetAlliancesAllianceIdOk } from '../model/getAlliancesAllianceIdOk';
import { InternalServerError } from '../model/internalServerError';
import { ServiceUnavailable } from '../model/serviceUnavailable';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AllianceService {

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
     * List all alliances
     * List all active player alliances  --- Alternate route: &#x60;/dev/alliances/&#x60;  Alternate route: &#x60;/legacy/alliances/&#x60;  Alternate route: &#x60;/v1/alliances/&#x60;  --- This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAlliances(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<number>>;
    public getAlliances(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<number>>>;
    public getAlliances(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<number>>>;
    public getAlliances(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
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

        return this.httpClient.get<Array<number>>(`${this.basePath}/alliances/`,
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
     * Get alliance information
     * Public information about an alliance  --- Alternate route: &#x60;/dev/alliances/{alliance_id}/&#x60;  Alternate route: &#x60;/v3/alliances/{alliance_id}/&#x60;  --- This route is cached for up to 3600 seconds
     * @param alliance_id An EVE alliance ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAlliancesAllianceId(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<GetAlliancesAllianceIdOk>;
    public getAlliancesAllianceId(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAlliancesAllianceIdOk>>;
    public getAlliancesAllianceId(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAlliancesAllianceIdOk>>;
    public getAlliancesAllianceId(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (alliance_id === null || alliance_id === undefined) {
            throw new Error('Required parameter alliance_id was null or undefined when calling getAlliancesAllianceId.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
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

        return this.httpClient.get<GetAlliancesAllianceIdOk>(`${this.basePath}/alliances/${encodeURIComponent(String(alliance_id))}/`,
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
     * List alliance&#39;s corporations
     * List all current member corporations of an alliance  --- Alternate route: &#x60;/dev/alliances/{alliance_id}/corporations/&#x60;  Alternate route: &#x60;/legacy/alliances/{alliance_id}/corporations/&#x60;  Alternate route: &#x60;/v1/alliances/{alliance_id}/corporations/&#x60;  --- This route is cached for up to 3600 seconds
     * @param alliance_id An EVE alliance ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAlliancesAllianceIdCorporations(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<number>>;
    public getAlliancesAllianceIdCorporations(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<number>>>;
    public getAlliancesAllianceIdCorporations(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<number>>>;
    public getAlliancesAllianceIdCorporations(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (alliance_id === null || alliance_id === undefined) {
            throw new Error('Required parameter alliance_id was null or undefined when calling getAlliancesAllianceIdCorporations.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
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

        return this.httpClient.get<Array<number>>(`${this.basePath}/alliances/${encodeURIComponent(String(alliance_id))}/corporations/`,
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
     * Get alliance icon
     * Get the icon urls for a alliance  --- Alternate route: &#x60;/dev/alliances/{alliance_id}/icons/&#x60;  Alternate route: &#x60;/legacy/alliances/{alliance_id}/icons/&#x60;  Alternate route: &#x60;/v1/alliances/{alliance_id}/icons/&#x60;  --- This route expires daily at 11:05
     * @param alliance_id An EVE alliance ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAlliancesAllianceIdIcons(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<GetAlliancesAllianceIdIconsOk>;
    public getAlliancesAllianceIdIcons(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAlliancesAllianceIdIconsOk>>;
    public getAlliancesAllianceIdIcons(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAlliancesAllianceIdIconsOk>>;
    public getAlliancesAllianceIdIcons(alliance_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (alliance_id === null || alliance_id === undefined) {
            throw new Error('Required parameter alliance_id was null or undefined when calling getAlliancesAllianceIdIcons.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
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

        return this.httpClient.get<GetAlliancesAllianceIdIconsOk>(`${this.basePath}/alliances/${encodeURIComponent(String(alliance_id))}/icons/`,
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