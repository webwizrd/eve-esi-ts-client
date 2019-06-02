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

import { Observable }                                        from 'rxjs';

import { BadRequest } from '../model/badRequest';
import { ErrorLimited } from '../model/errorLimited';
import { Forbidden } from '../model/forbidden';
import { GatewayTimeout } from '../model/gatewayTimeout';
import { GetCharactersCharacterIdFwStatsOk } from '../model/getCharactersCharacterIdFwStatsOk';
import { GetCorporationsCorporationIdFwStatsOk } from '../model/getCorporationsCorporationIdFwStatsOk';
import { GetFwLeaderboardsCharactersOk } from '../model/getFwLeaderboardsCharactersOk';
import { GetFwLeaderboardsCorporationsOk } from '../model/getFwLeaderboardsCorporationsOk';
import { GetFwLeaderboardsOk } from '../model/getFwLeaderboardsOk';
import { InternalServerError } from '../model/internalServerError';
import { ServiceUnavailable } from '../model/serviceUnavailable';
import { Unauthorized } from '../model/unauthorized';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class FactionWarfareService {

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
     * Overview of a character involved in faction warfare
     * Statistical overview of a character involved in faction warfare  --- Alternate route: &#x60;/dev/characters/{character_id}/fw/stats/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/fw/stats/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/fw/stats/&#x60;  --- This route expires daily at 11:05
     * @param character_id An EVE character ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdFwStats(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'body', reportProgress?: boolean): Observable<GetCharactersCharacterIdFwStatsOk>;
    public getCharactersCharacterIdFwStats(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCharactersCharacterIdFwStatsOk>>;
    public getCharactersCharacterIdFwStats(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCharactersCharacterIdFwStatsOk>>;
    public getCharactersCharacterIdFwStats(character_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling getCharactersCharacterIdFwStats.');
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

        return this.httpClient.get<GetCharactersCharacterIdFwStatsOk>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/fw/stats/`,
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
     * Overview of a corporation involved in faction warfare
     * Statistics about a corporation involved in faction warfare  --- Alternate route: &#x60;/dev/corporations/{corporation_id}/fw/stats/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/fw/stats/&#x60;  Alternate route: &#x60;/v1/corporations/{corporation_id}/fw/stats/&#x60;  --- This route expires daily at 11:05
     * @param corporation_id An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationsCorporationIdFwStats(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'body', reportProgress?: boolean): Observable<GetCorporationsCorporationIdFwStatsOk>;
    public getCorporationsCorporationIdFwStats(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCorporationsCorporationIdFwStatsOk>>;
    public getCorporationsCorporationIdFwStats(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCorporationsCorporationIdFwStatsOk>>;
    public getCorporationsCorporationIdFwStats(corporation_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (corporation_id === null || corporation_id === undefined) {
            throw new Error('Required parameter corporation_id was null or undefined when calling getCorporationsCorporationIdFwStats.');
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

        return this.httpClient.get<GetCorporationsCorporationIdFwStatsOk>(`${this.basePath}/corporations/${encodeURIComponent(String(corporation_id))}/fw/stats/`,
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
     * List of the top factions in faction warfare
     * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday  --- Alternate route: &#x60;/dev/fw/leaderboards/&#x60;  Alternate route: &#x60;/legacy/fw/leaderboards/&#x60;  Alternate route: &#x60;/v1/fw/leaderboards/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFwLeaderboards(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<GetFwLeaderboardsOk>;
    public getFwLeaderboards(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetFwLeaderboardsOk>>;
    public getFwLeaderboards(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetFwLeaderboardsOk>>;
    public getFwLeaderboards(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<GetFwLeaderboardsOk>(`${this.basePath}/fw/leaderboards/`,
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
     * List of the top pilots in faction warfare
     * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday  --- Alternate route: &#x60;/dev/fw/leaderboards/characters/&#x60;  Alternate route: &#x60;/legacy/fw/leaderboards/characters/&#x60;  Alternate route: &#x60;/v1/fw/leaderboards/characters/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFwLeaderboardsCharacters(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<GetFwLeaderboardsCharactersOk>;
    public getFwLeaderboardsCharacters(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetFwLeaderboardsCharactersOk>>;
    public getFwLeaderboardsCharacters(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetFwLeaderboardsCharactersOk>>;
    public getFwLeaderboardsCharacters(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<GetFwLeaderboardsCharactersOk>(`${this.basePath}/fw/leaderboards/characters/`,
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
     * List of the top corporations in faction warfare
     * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday  --- Alternate route: &#x60;/dev/fw/leaderboards/corporations/&#x60;  Alternate route: &#x60;/legacy/fw/leaderboards/corporations/&#x60;  Alternate route: &#x60;/v1/fw/leaderboards/corporations/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFwLeaderboardsCorporations(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<GetFwLeaderboardsCorporationsOk>;
    public getFwLeaderboardsCorporations(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetFwLeaderboardsCorporationsOk>>;
    public getFwLeaderboardsCorporations(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetFwLeaderboardsCorporationsOk>>;
    public getFwLeaderboardsCorporations(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<GetFwLeaderboardsCorporationsOk>(`${this.basePath}/fw/leaderboards/corporations/`,
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
     * An overview of statistics about factions involved in faction warfare
     * Statistical overviews of factions involved in faction warfare  --- Alternate route: &#x60;/dev/fw/stats/&#x60;  Alternate route: &#x60;/legacy/fw/stats/&#x60;  Alternate route: &#x60;/v1/fw/stats/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFwStats(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getFwStats(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getFwStats(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getFwStats(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<any>>(`${this.basePath}/fw/stats/`,
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
     * Ownership of faction warfare systems
     * An overview of the current ownership of faction warfare solar systems  --- Alternate route: &#x60;/dev/fw/systems/&#x60;  Alternate route: &#x60;/v2/fw/systems/&#x60;  --- This route is cached for up to 1800 seconds
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFwSystems(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getFwSystems(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getFwSystems(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getFwSystems(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<any>>(`${this.basePath}/fw/systems/`,
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
     * Data about which NPC factions are at war
     * Data about which NPC factions are at war  --- Alternate route: &#x60;/dev/fw/wars/&#x60;  Alternate route: &#x60;/legacy/fw/wars/&#x60;  Alternate route: &#x60;/v1/fw/wars/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFwWars(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getFwWars(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getFwWars(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getFwWars(datasource?: 'tranquility' | 'singularity', If_None_Match?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.get<Array<any>>(`${this.basePath}/fw/wars/`,
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
