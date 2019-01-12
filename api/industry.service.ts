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
import { ServiceUnavailable } from '../model/serviceUnavailable';
import { Unauthorized } from '../model/unauthorized';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class IndustryService {

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
     * List character industry jobs
     * List industry jobs placed by a character  --- Alternate route: &#x60;/dev/characters/{character_id}/industry/jobs/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/industry/jobs/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/industry/jobs/&#x60;  --- This route is cached for up to 300 seconds
     * @param character_id An EVE character ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param include_completed Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdIndustryJobs(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, include_completed?: boolean, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCharactersCharacterIdIndustryJobs(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, include_completed?: boolean, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCharactersCharacterIdIndustryJobs(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, include_completed?: boolean, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCharactersCharacterIdIndustryJobs(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, include_completed?: boolean, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling getCharactersCharacterIdIndustryJobs.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (include_completed !== undefined && include_completed !== null) {
            queryParameters = queryParameters.set('include_completed', <any>include_completed);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
        }

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

        return this.httpClient.get<Array<any>>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/industry/jobs/`,
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
     * Character mining ledger
     * Paginated record of all mining done by a character for the past 30 days   --- Alternate route: &#x60;/dev/characters/{character_id}/mining/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mining/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/mining/&#x60;  --- This route is cached for up to 600 seconds
     * @param character_id An EVE character ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdMining(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCharactersCharacterIdMining(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCharactersCharacterIdMining(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCharactersCharacterIdMining(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling getCharactersCharacterIdMining.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
        }

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

        return this.httpClient.get<Array<any>>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/mining/`,
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
     * Moon extraction timers
     * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.   --- Alternate route: &#x60;/dev/corporation/{corporation_id}/mining/extractions/&#x60;  Alternate route: &#x60;/legacy/corporation/{corporation_id}/mining/extractions/&#x60;  Alternate route: &#x60;/v1/corporation/{corporation_id}/mining/extractions/&#x60;  --- This route is cached for up to 1800 seconds  --- Requires one of the following EVE corporation role(s): Station_Manager 
     * @param corporation_id An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationCorporationIdMiningExtractions(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCorporationCorporationIdMiningExtractions(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCorporationCorporationIdMiningExtractions(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCorporationCorporationIdMiningExtractions(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (corporation_id === null || corporation_id === undefined) {
            throw new Error('Required parameter corporation_id was null or undefined when calling getCorporationCorporationIdMiningExtractions.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
        }

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

        return this.httpClient.get<Array<any>>(`${this.basePath}/corporation/${encodeURIComponent(String(corporation_id))}/mining/extractions/`,
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
     * Corporation mining observers
     * Paginated list of all entities capable of observing and recording mining for a corporation   --- Alternate route: &#x60;/dev/corporation/{corporation_id}/mining/observers/&#x60;  Alternate route: &#x60;/legacy/corporation/{corporation_id}/mining/observers/&#x60;  Alternate route: &#x60;/v1/corporation/{corporation_id}/mining/observers/&#x60;  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant 
     * @param corporation_id An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationCorporationIdMiningObservers(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCorporationCorporationIdMiningObservers(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCorporationCorporationIdMiningObservers(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCorporationCorporationIdMiningObservers(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (corporation_id === null || corporation_id === undefined) {
            throw new Error('Required parameter corporation_id was null or undefined when calling getCorporationCorporationIdMiningObservers.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
        }

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

        return this.httpClient.get<Array<any>>(`${this.basePath}/corporation/${encodeURIComponent(String(corporation_id))}/mining/observers/`,
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
     * Observed corporation mining
     * Paginated record of all mining seen by an observer   --- Alternate route: &#x60;/dev/corporation/{corporation_id}/mining/observers/{observer_id}/&#x60;  Alternate route: &#x60;/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/&#x60;  Alternate route: &#x60;/v1/corporation/{corporation_id}/mining/observers/{observer_id}/&#x60;  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant 
     * @param corporation_id An EVE corporation ID
     * @param observer_id A mining observer id
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationCorporationIdMiningObserversObserverId(corporation_id: number, observer_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCorporationCorporationIdMiningObserversObserverId(corporation_id: number, observer_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCorporationCorporationIdMiningObserversObserverId(corporation_id: number, observer_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCorporationCorporationIdMiningObserversObserverId(corporation_id: number, observer_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (corporation_id === null || corporation_id === undefined) {
            throw new Error('Required parameter corporation_id was null or undefined when calling getCorporationCorporationIdMiningObserversObserverId.');
        }

        if (observer_id === null || observer_id === undefined) {
            throw new Error('Required parameter observer_id was null or undefined when calling getCorporationCorporationIdMiningObserversObserverId.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
        }

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

        return this.httpClient.get<Array<any>>(`${this.basePath}/corporation/${encodeURIComponent(String(corporation_id))}/mining/observers/${encodeURIComponent(String(observer_id))}/`,
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
     * List corporation industry jobs
     * List industry jobs run by a corporation  --- Alternate route: &#x60;/dev/corporations/{corporation_id}/industry/jobs/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/industry/jobs/&#x60;  Alternate route: &#x60;/v1/corporations/{corporation_id}/industry/jobs/&#x60;  --- This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): Factory_Manager 
     * @param corporation_id An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param include_completed Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationsCorporationIdIndustryJobs(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, include_completed?: boolean, page?: number, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCorporationsCorporationIdIndustryJobs(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, include_completed?: boolean, page?: number, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCorporationsCorporationIdIndustryJobs(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, include_completed?: boolean, page?: number, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCorporationsCorporationIdIndustryJobs(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, include_completed?: boolean, page?: number, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (corporation_id === null || corporation_id === undefined) {
            throw new Error('Required parameter corporation_id was null or undefined when calling getCorporationsCorporationIdIndustryJobs.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (include_completed !== undefined && include_completed !== null) {
            queryParameters = queryParameters.set('include_completed', <any>include_completed);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;
        if (If_None_Match !== undefined && If_None_Match !== null) {
            headers = headers.set('If-None-Match', String(If_None_Match));
        }

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

        return this.httpClient.get<Array<any>>(`${this.basePath}/corporations/${encodeURIComponent(String(corporation_id))}/industry/jobs/`,
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
     * List industry facilities
     * Return a list of industry facilities  --- Alternate route: &#x60;/dev/industry/facilities/&#x60;  Alternate route: &#x60;/legacy/industry/facilities/&#x60;  Alternate route: &#x60;/v1/industry/facilities/&#x60;  --- This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getIndustryFacilities(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getIndustryFacilities(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getIndustryFacilities(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getIndustryFacilities(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<any>>(`${this.basePath}/industry/facilities/`,
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
     * List solar system cost indices
     * Return cost indices for solar systems  --- Alternate route: &#x60;/dev/industry/systems/&#x60;  Alternate route: &#x60;/legacy/industry/systems/&#x60;  Alternate route: &#x60;/v1/industry/systems/&#x60;  --- This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getIndustrySystems(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getIndustrySystems(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getIndustrySystems(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getIndustrySystems(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<any>>(`${this.basePath}/industry/systems/`,
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