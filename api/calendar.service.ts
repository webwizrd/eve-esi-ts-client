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
import { GetCharactersCharacterIdCalendarEventIdAttendeesNotFound } from '../model/getCharactersCharacterIdCalendarEventIdAttendeesNotFound';
import { GetCharactersCharacterIdCalendarEventIdNotFound } from '../model/getCharactersCharacterIdCalendarEventIdNotFound';
import { GetCharactersCharacterIdCalendarEventIdOk } from '../model/getCharactersCharacterIdCalendarEventIdOk';
import { InternalServerError } from '../model/internalServerError';
import { PutCharactersCharacterIdCalendarEventIdResponse } from '../model/putCharactersCharacterIdCalendarEventIdResponse';
import { ServiceUnavailable } from '../model/serviceUnavailable';
import { Unauthorized } from '../model/unauthorized';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CalendarService {

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
     * List calendar event summaries
     * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event  --- Alternate route: &#x60;/dev/characters/{character_id}/calendar/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/calendar/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/calendar/&#x60;  --- This route is cached for up to 5 seconds
     * @param character_id An EVE character ID
     * @param datasource The server name you would like data from
     * @param from_event The event ID to retrieve events from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdCalendar(character_id: number, datasource?: 'tranquility' | 'singularity', from_event?: number, If_None_Match?: string, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCharactersCharacterIdCalendar(character_id: number, datasource?: 'tranquility' | 'singularity', from_event?: number, If_None_Match?: string, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCharactersCharacterIdCalendar(character_id: number, datasource?: 'tranquility' | 'singularity', from_event?: number, If_None_Match?: string, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCharactersCharacterIdCalendar(character_id: number, datasource?: 'tranquility' | 'singularity', from_event?: number, If_None_Match?: string, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling getCharactersCharacterIdCalendar.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (from_event !== undefined && from_event !== null) {
            queryParameters = queryParameters.set('from_event', <any>from_event);
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

        return this.httpClient.get<Array<any>>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/calendar/`,
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
     * Get an event
     * Get all the information for a specific event  --- Alternate route: &#x60;/dev/characters/{character_id}/calendar/{event_id}/&#x60;  Alternate route: &#x60;/v3/characters/{character_id}/calendar/{event_id}/&#x60;  --- This route is cached for up to 5 seconds
     * @param character_id An EVE character ID
     * @param event_id The id of the event requested
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdCalendarEventId(character_id: number, event_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'body', reportProgress?: boolean): Observable<GetCharactersCharacterIdCalendarEventIdOk>;
    public getCharactersCharacterIdCalendarEventId(character_id: number, event_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCharactersCharacterIdCalendarEventIdOk>>;
    public getCharactersCharacterIdCalendarEventId(character_id: number, event_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCharactersCharacterIdCalendarEventIdOk>>;
    public getCharactersCharacterIdCalendarEventId(character_id: number, event_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling getCharactersCharacterIdCalendarEventId.');
        }

        if (event_id === null || event_id === undefined) {
            throw new Error('Required parameter event_id was null or undefined when calling getCharactersCharacterIdCalendarEventId.');
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

        return this.httpClient.get<GetCharactersCharacterIdCalendarEventIdOk>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/calendar/${encodeURIComponent(String(event_id))}/`,
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
     * Get attendees
     * Get all invited attendees for a given event  --- Alternate route: &#x60;/dev/characters/{character_id}/calendar/{event_id}/attendees/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/calendar/{event_id}/attendees/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/calendar/{event_id}/attendees/&#x60;  --- This route is cached for up to 600 seconds
     * @param character_id An EVE character ID
     * @param event_id The id of the event requested
     * @param datasource The server name you would like data from
     * @param If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdCalendarEventIdAttendees(character_id: number, event_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getCharactersCharacterIdCalendarEventIdAttendees(character_id: number, event_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getCharactersCharacterIdCalendarEventIdAttendees(character_id: number, event_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getCharactersCharacterIdCalendarEventIdAttendees(character_id: number, event_id: number, datasource?: 'tranquility' | 'singularity', If_None_Match?: string, token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling getCharactersCharacterIdCalendarEventIdAttendees.');
        }

        if (event_id === null || event_id === undefined) {
            throw new Error('Required parameter event_id was null or undefined when calling getCharactersCharacterIdCalendarEventIdAttendees.');
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

        return this.httpClient.get<Array<any>>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/calendar/${encodeURIComponent(String(event_id))}/attendees/`,
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
     * Respond to an event
     * Set your response status to an event  --- Alternate route: &#x60;/dev/characters/{character_id}/calendar/{event_id}/&#x60;  Alternate route: &#x60;/v3/characters/{character_id}/calendar/{event_id}/&#x60; 
     * @param character_id An EVE character ID
     * @param event_id The ID of the event requested
     * @param response The response value to set, overriding current value
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putCharactersCharacterIdCalendarEventId(character_id: number, event_id: number, response: PutCharactersCharacterIdCalendarEventIdResponse, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putCharactersCharacterIdCalendarEventId(character_id: number, event_id: number, response: PutCharactersCharacterIdCalendarEventIdResponse, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putCharactersCharacterIdCalendarEventId(character_id: number, event_id: number, response: PutCharactersCharacterIdCalendarEventIdResponse, datasource?: 'tranquility' | 'singularity', token?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putCharactersCharacterIdCalendarEventId(character_id: number, event_id: number, response: PutCharactersCharacterIdCalendarEventIdResponse, datasource?: 'tranquility' | 'singularity', token?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (character_id === null || character_id === undefined) {
            throw new Error('Required parameter character_id was null or undefined when calling putCharactersCharacterIdCalendarEventId.');
        }

        if (event_id === null || event_id === undefined) {
            throw new Error('Required parameter event_id was null or undefined when calling putCharactersCharacterIdCalendarEventId.');
        }

        if (response === null || response === undefined) {
            throw new Error('Required parameter response was null or undefined when calling putCharactersCharacterIdCalendarEventId.');
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

        return this.httpClient.put<any>(`${this.basePath}/characters/${encodeURIComponent(String(character_id))}/calendar/${encodeURIComponent(String(event_id))}/`,
            response,
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