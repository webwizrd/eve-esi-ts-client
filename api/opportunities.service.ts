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
import { GetOpportunitiesGroupsGroupIdOk } from '../model/getOpportunitiesGroupsGroupIdOk';
import { GetOpportunitiesTasksTaskIdOk } from '../model/getOpportunitiesTasksTaskIdOk';
import { InternalServerError } from '../model/internalServerError';
import { ServiceUnavailable } from '../model/serviceUnavailable';
import { Unauthorized } from '../model/unauthorized';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class OpportunitiesService {

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
     * Get a character&#39;s completed tasks
     * Return a list of tasks finished by a character  --- Alternate route: &#x60;/dev/characters/{character_id}/opportunities/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/opportunities/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/opportunities/&#x60;  --- This route is cached for up to 3600 seconds
     * @param character_id An EVE character ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdOpportunities(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCharactersCharacterIdOpportunities(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCharactersCharacterIdOpportunities(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCharactersCharacterIdOpportunities(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling getCharactersCharacterIdOpportunities.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
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

        return this.httpClient.get<Array<any>>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/opportunities/`,
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
     * Get opportunities groups
     * Return a list of opportunities groups  --- Alternate route: &#x60;/dev/opportunities/groups/&#x60;  Alternate route: &#x60;/legacy/opportunities/groups/&#x60;  Alternate route: &#x60;/v1/opportunities/groups/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOpportunitiesGroups(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<number>>;
    public getOpportunitiesGroups(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<number>>>;
    public getOpportunitiesGroups(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<number>>>;
    public getOpportunitiesGroups(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<number>>(`${this.basePath}/opportunities/groups/`,
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
     * Get opportunities group
     * Return information of an opportunities group  --- Alternate route: &#x60;/dev/opportunities/groups/{group_id}/&#x60;  Alternate route: &#x60;/legacy/opportunities/groups/{group_id}/&#x60;  Alternate route: &#x60;/v1/opportunities/groups/{group_id}/&#x60;  --- This route expires daily at 11:05
     * @param group_id ID of an opportunities group
     * @param Accept_Language Language to use in the response
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param language Language to use in the response, takes precedence over Accept-Language
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOpportunitiesGroupsGroupId(group_id: number, Accept_Language?: 'de' | 'en-us' | 'fr' | 'ja' | 'ru' | 'zh', datasource?: 'tranquility' | 'singularity', If_None_Match?: string, language?: 'de' | 'en-us' | 'fr' | 'ja' | 'ru' | 'zh', observe?: 'body', reportProgress?: boolean): Observable<GetOpportunitiesGroupsGroupIdOk>;
    public getOpportunitiesGroupsGroupId(group_id: number, Accept_Language?: 'de' | 'en-us' | 'fr' | 'ja' | 'ru' | 'zh', datasource?: 'tranquility' | 'singularity', If_None_Match?: string, language?: 'de' | 'en-us' | 'fr' | 'ja' | 'ru' | 'zh', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetOpportunitiesGroupsGroupIdOk>>;
    public getOpportunitiesGroupsGroupId(group_id: number, Accept_Language?: 'de' | 'en-us' | 'fr' | 'ja' | 'ru' | 'zh', datasource?: 'tranquility' | 'singularity', If_None_Match?: string, language?: 'de' | 'en-us' | 'fr' | 'ja' | 'ru' | 'zh', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetOpportunitiesGroupsGroupIdOk>>;
    public getOpportunitiesGroupsGroupId(group_id: number, Accept_Language?: 'de' | 'en-us' | 'fr' | 'ja' | 'ru' | 'zh', datasource?: 'tranquility' | 'singularity', If_None_Match?: string, language?: 'de' | 'en-us' | 'fr' | 'ja' | 'ru' | 'zh', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (group_id === null || group_id === undefined) {
            throw new Error('Required parameter group_id was null or undefined when calling getOpportunitiesGroupsGroupId.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (language !== undefined && language !== null) {
            queryParameters = queryParameters.set('language', <any>language);
        }

        let headers = this.defaultHeaders;
        if (Accept_Language !== undefined && Accept_Language !== null) {
            headers = headers.set('Accept-Language', String(Accept_Language));
        }
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

        return this.httpClient.get<GetOpportunitiesGroupsGroupIdOk>(`${this.basePath}/opportunities/groups/${encodeURIComponent(String(group_id))}/`,
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
     * Get opportunities tasks
     * Return a list of opportunities tasks  --- Alternate route: &#x60;/dev/opportunities/tasks/&#x60;  Alternate route: &#x60;/legacy/opportunities/tasks/&#x60;  Alternate route: &#x60;/v1/opportunities/tasks/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOpportunitiesTasks(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<number>>;
    public getOpportunitiesTasks(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<number>>>;
    public getOpportunitiesTasks(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<number>>>;
    public getOpportunitiesTasks(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<number>>(`${this.basePath}/opportunities/tasks/`,
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
     * Get opportunities task
     * Return information of an opportunities task  --- Alternate route: &#x60;/dev/opportunities/tasks/{task_id}/&#x60;  Alternate route: &#x60;/legacy/opportunities/tasks/{task_id}/&#x60;  Alternate route: &#x60;/v1/opportunities/tasks/{task_id}/&#x60;  --- This route expires daily at 11:05
     * @param task_id ID of an opportunities task
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOpportunitiesTasksTaskId(task_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<GetOpportunitiesTasksTaskIdOk>;
    public getOpportunitiesTasksTaskId(task_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetOpportunitiesTasksTaskIdOk>>;
    public getOpportunitiesTasksTaskId(task_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetOpportunitiesTasksTaskIdOk>>;
    public getOpportunitiesTasksTaskId(task_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (task_id === null || task_id === undefined) {
            throw new Error('Required parameter task_id was null or undefined when calling getOpportunitiesTasksTaskId.');
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

        return this.httpClient.get<GetOpportunitiesTasksTaskIdOk>(`${this.basePath}/opportunities/tasks/${encodeURIComponent(String(task_id))}/`,
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