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
import { InternalServerError } from '../model/internalServerError';
import { ServiceUnavailable } from '../model/serviceUnavailable';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SovereigntyService {

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
     * List sovereignty campaigns
     * Shows sovereignty data for campaigns.  --- Alternate route: &#x60;/dev/sovereignty/campaigns/&#x60;  Alternate route: &#x60;/legacy/sovereignty/campaigns/&#x60;  Alternate route: &#x60;/v1/sovereignty/campaigns/&#x60;  --- This route is cached for up to 5 seconds
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSovereigntyCampaigns(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getSovereigntyCampaigns(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getSovereigntyCampaigns(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getSovereigntyCampaigns(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<any>>(`${this.basePath}/sovereignty/campaigns/`,
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
     * List sovereignty of systems
     * Shows sovereignty information for solar systems  --- Alternate route: &#x60;/dev/sovereignty/map/&#x60;  Alternate route: &#x60;/legacy/sovereignty/map/&#x60;  Alternate route: &#x60;/v1/sovereignty/map/&#x60;  --- This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSovereigntyMap(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getSovereigntyMap(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getSovereigntyMap(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getSovereigntyMap(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<any>>(`${this.basePath}/sovereignty/map/`,
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
     * List sovereignty structures
     * Shows sovereignty data for structures.  --- Alternate route: &#x60;/dev/sovereignty/structures/&#x60;  Alternate route: &#x60;/legacy/sovereignty/structures/&#x60;  Alternate route: &#x60;/v1/sovereignty/structures/&#x60;  --- This route is cached for up to 120 seconds
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSovereigntyStructures(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getSovereigntyStructures(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getSovereigntyStructures(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getSovereigntyStructures(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<any>>(`${this.basePath}/sovereignty/structures/`,
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
