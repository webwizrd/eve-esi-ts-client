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
import { PostCorporationsCorporationIdAssetsLocationsNotFound } from '../model/postCorporationsCorporationIdAssetsLocationsNotFound';
import { PostCorporationsCorporationIdAssetsNamesNotFound } from '../model/postCorporationsCorporationIdAssetsNamesNotFound';
import { ServiceUnavailable } from '../model/serviceUnavailable';
import { Unauthorized } from '../model/unauthorized';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AssetsService {

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
     * Get character assets
     * Return a list of the characters assets  --- Alternate route: &#x60;/dev/characters/{character_id}/assets/&#x60;  Alternate route: &#x60;/v3/characters/{character_id}/assets/&#x60;  --- This route is cached for up to 3600 seconds
     * @param character_id An EVE character ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdAssets(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCharactersCharacterIdAssets(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCharactersCharacterIdAssets(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCharactersCharacterIdAssets(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling getCharactersCharacterIdAssets.');
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

        return this.httpClient.get<Array<any>>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/assets/`,
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
     * Get corporation assets
     * Return a list of the corporation assets  --- Alternate route: &#x60;/dev/corporations/{corporation_id}/assets/&#x60;  Alternate route: &#x60;/v3/corporations/{corporation_id}/assets/&#x60;  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 
     * @param corporation_id An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationsCorporationIdAssets(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCorporationsCorporationIdAssets(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCorporationsCorporationIdAssets(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCorporationsCorporationIdAssets(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, page?: number, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (corporation_id === null || corporation_id === undefined) {
            throw new Error('Required parameter corporation_id was null or undefined when calling getCorporationsCorporationIdAssets.');
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

        return this.httpClient.get<Array<any>>(`${this.basePath}/corporations/${encodeURIComponent(String(corporation_id))}/assets/`,
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
     * Get character asset locations
     * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)  --- Alternate route: &#x60;/dev/characters/{character_id}/assets/locations/&#x60;  Alternate route: &#x60;/v2/characters/{character_id}/assets/locations/&#x60; 
     * @param character_id An EVE character ID
     * @param item_ids A list of item ids
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCharactersCharacterIdAssetsLocations(character_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public postCharactersCharacterIdAssetsLocations(character_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public postCharactersCharacterIdAssetsLocations(character_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public postCharactersCharacterIdAssetsLocations(character_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling postCharactersCharacterIdAssetsLocations.');
        }

        if (item_ids === null || item_ids === undefined) {
            throw new Error('Required parameter item_ids was null or undefined when calling postCharactersCharacterIdAssetsLocations.');
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

        return this.httpClient.post<Array<any>>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/assets/locations/`,
            item_ids,
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
     * Get character asset names
     * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.  --- Alternate route: &#x60;/dev/characters/{character_id}/assets/names/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/assets/names/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/assets/names/&#x60; 
     * @param character_id An EVE character ID
     * @param item_ids A list of item ids
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCharactersCharacterIdAssetsNames(character_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public postCharactersCharacterIdAssetsNames(character_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public postCharactersCharacterIdAssetsNames(character_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public postCharactersCharacterIdAssetsNames(character_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling postCharactersCharacterIdAssetsNames.');
        }

        if (item_ids === null || item_ids === undefined) {
            throw new Error('Required parameter item_ids was null or undefined when calling postCharactersCharacterIdAssetsNames.');
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

        return this.httpClient.post<Array<any>>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/assets/names/`,
            item_ids,
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
     * Get corporation asset locations
     * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)  --- Alternate route: &#x60;/dev/corporations/{corporation_id}/assets/locations/&#x60;  Alternate route: &#x60;/v2/corporations/{corporation_id}/assets/locations/&#x60;   --- Requires one of the following EVE corporation role(s): Director 
     * @param corporation_id An EVE corporation ID
     * @param item_ids A list of item ids
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCorporationsCorporationIdAssetsLocations(corporation_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public postCorporationsCorporationIdAssetsLocations(corporation_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public postCorporationsCorporationIdAssetsLocations(corporation_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public postCorporationsCorporationIdAssetsLocations(corporation_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (corporation_id === null || corporation_id === undefined) {
            throw new Error('Required parameter corporation_id was null or undefined when calling postCorporationsCorporationIdAssetsLocations.');
        }

        if (item_ids === null || item_ids === undefined) {
            throw new Error('Required parameter item_ids was null or undefined when calling postCorporationsCorporationIdAssetsLocations.');
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

        return this.httpClient.post<Array<any>>(`${this.basePath}/corporations/${encodeURIComponent(String(corporation_id))}/assets/locations/`,
            item_ids,
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
     * Get corporation asset names
     * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships  --- Alternate route: &#x60;/dev/corporations/{corporation_id}/assets/names/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/assets/names/&#x60;  Alternate route: &#x60;/v1/corporations/{corporation_id}/assets/names/&#x60;   --- Requires one of the following EVE corporation role(s): Director 
     * @param corporation_id An EVE corporation ID
     * @param item_ids A list of item ids
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCorporationsCorporationIdAssetsNames(corporation_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public postCorporationsCorporationIdAssetsNames(corporation_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public postCorporationsCorporationIdAssetsNames(corporation_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public postCorporationsCorporationIdAssetsNames(corporation_id: number, item_ids: Array<number>, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (corporation_id === null || corporation_id === undefined) {
            throw new Error('Required parameter corporation_id was null or undefined when calling postCorporationsCorporationIdAssetsNames.');
        }

        if (item_ids === null || item_ids === undefined) {
            throw new Error('Required parameter item_ids was null or undefined when calling postCorporationsCorporationIdAssetsNames.');
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

        return this.httpClient.post<Array<any>>(`${this.basePath}/corporations/${encodeURIComponent(String(corporation_id))}/assets/names/`,
            item_ids,
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