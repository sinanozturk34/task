/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface RowType {
  position?: string;
  desks?: DesksType;
}

export interface BaggageClaimType {
  belts?: string[];
}

export interface RemarksType {
  remarks?: string[];
}

export interface CodesharesType {
  codeshares?: string[];
}

export interface FlightList {
  flights?: Flight[];
}

export interface CheckinAllocationType {
  /** @format date-time */
  endTime?: string;
  rows?: RowsType;
  /** @format date-time */
  startTime?: string;
}

export interface RowsType {
  rows?: RowType[];
}

export interface PublicName {
  dutch?: string;
  english?: string;
}

export interface DestinationList {
  destinations?: Destination[];
}

export interface Destination {
  city?: string;
  country?: string;
  iata?: string;
  publicName?: PublicName;
}

export interface Airline {
  iata?: string;
  icao?: string;
  /** @format int64 */
  nvls?: number;
  publicName?: string;
}

export interface AirlineList {
  airlines?: Airline[];
}

export interface AircraftType {
  iataMain?: string;
  iataSub?: string;
  longDescription?: string;
  shortDescription?: string;
}

export interface AircraftTypeList {
  aircraftTypes?: AircraftType[];
}

export interface Flight {
  /** @format date-time */
  lastUpdatedAt?: string;
  /**
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ
   * @format date-time
   */
  actualLandingTime?: string;
  /**
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ
   * @format date-time
   */
  actualOffBlockTime?: string;
  aircraftRegistration?: string;
  aircraftType?: AircraftTypeType;
  baggageClaim?: BaggageClaimType;
  checkinAllocations?: CheckinAllocationsType;
  codeshares?: CodesharesType;
  /**
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ
   * @format date-time
   */
  estimatedLandingTime?: string;
  /**
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ
   * @format date-time
   */
  expectedTimeBoarding?: string;
  /**
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ
   * @format date-time
   */
  expectedTimeGateClosing?: string;
  /**
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ
   * @format date-time
   */
  expectedTimeGateOpen?: string;
  /**
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ
   * @format date-time
   */
  expectedTimeOnBelt?: string;
  /** expected security filter */
  expectedSecurityFilter?: string;
  flightDirection?: "A" | "D";
  flightName?: string;
  /** @format int64 */
  flightNumber?: number;
  gate?: string;
  pier?: string;
  id?: string;
  isOperationalFlight?: boolean;
  mainFlight?: string;
  prefixIATA?: string;
  prefixICAO?: string;
  /** @format int64 */
  airlineCode?: number;
  /**
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ
   * @format date-time
   */
  publicEstimatedOffBlockTime?: string;
  publicFlightState?: PublicFlightStateType;
  route?: RouteType;
  /**
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ
   * @format date-time
   */
  scheduleDateTime?: string;
  /** yyyy-MM-dd */
  scheduleDate?: string;
  /** hh:mm:ss */
  scheduleTime?: string;
  /** The service type category of the commercial flight. For example: J = Passenger Line, C=Passenger Charter, F = Freight Line and H = Freight Charter etc. */
  serviceType?: string;
  /** @format int64 */
  terminal?: number;
  transferPositions?: TransferPositionsType;
  schemaVersion?: string;
}

export interface RouteType {
  destinations?: string[];
  /** S (Schengen), E (Europe) or N (non-Europe) */
  eu?: string;
  /** Indicates if a visum is required for destination */
  visa?: boolean;
}

export interface DesksType {
  desks?: DeskType[];
}

export interface AircraftTypeType {
  iataMain?: string;
  iataSub?: string;
}

export interface DeskType {
  checkinClass?: CheckinClassType;
  /** @format int64 */
  position?: number;
}

export interface CheckinClassType {
  code?: string;
  description?: string;
}

export interface TransferPositionsType {
  transferPositions?: number[];
}

export interface PublicFlightStateType {
  flightStates?: string[];
}

export interface CheckinAllocationsType {
  checkinAllocations?: CheckinAllocationType[];
  remarks?: RemarksType;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.schiphol.nl/public-flights";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Schiphol PublicFlight API
 * @version 4.1
 * @baseUrl https://api.schiphol.nl/public-flights
 * @contact api-support@schiphol.nl
 *
 * Public-Flights Flight API
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  flights = {
    /**
     * No description
     *
     * @name FlightsDetail
     * @summary Retrieves a Flight based on flight-id
     * @request GET:/flights/{id}
     */
    flightsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Flight, void>({
        path: `/flights/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves flights for a specific date. If scheduleDate is provided as query parameter, it will retrieve flights for that date. If not provided it is defaulted to today. If there are more hits then allowed on one page response headers will contain the URLs where other pages of the results can be reached.For example:<br/>Link: &lt;protocol://server_address:port/public-flights/resource&gt; ; rel="first", <br/>&lt;protocol://server_address:port/public-flights/resource?page=10&gt; rel="last", <br/>&lt;protocol://server_address:port/public-flights/resource?page=3&gt; rel="next", <br/>&lt;protocol://server_address:port/public-flights/resource?page=1&gt; rel="prev"<br/><br/>
     *
     * @name FlightsList
     * @summary Retrieves flights for a specific date
     * @request GET:/flights
     */
    flightsList: (
      query?: {
        /**
         * Scheduled date to get flights for. Format: yyyy-MM-dd. Defaults to today if not provided
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        scheduleDate?: string;
        /**
         * Scheduled time to get flights from. Format: HH:mm
         * @pattern ^\d{2}:\d{2}$
         */
        scheduleTime?: string;
        /**
         * Flight number as printed on the ticket
         * @minLength 5
         * @maxLength 8
         */
        flightName?: string;
        /** Direction of the flight */
        flightDirection?: "A" | "D";
        /**
         * Prefix in flight number as printed on the ticket. For exmaple: KL. This can either be a 2-character (IATA) airline prefix or 3-character (ICAO) airline prefix. Only one airline (or airlineCode) can be queried at the same time.
         * @minLength 2
         * @maxLength 3
         */
        airline?: string;
        /**
         * NVLS code of an airliner.
         * @format int32
         */
        airlineCode?: number;
        /**
         * IATA or ICAO code of airport in route; multiple values, comma separated
         * @minLength 1
         */
        route?: string;
        /**
         * Include flights of earlier an scheduleDate when these have enough delay to shift to the date that is queried upon.
         * @default false
         */
        includedelays?: boolean;
        /**
         * Page number
         * @format int32
         * @min 0
         * @max 499
         * @default 0
         */
        page?: number;
        /**
         * Specifies which field to use for sorting. Allowed values are flightName, scheduleDate, scheduleTime, flightDirection, mainFlight, airlineCode, id, and all fields from the searchDateTimeField parameter. Use plus or minus sign to indicate ascending or descending order. Multiple fields are allowed and should be separated by a comma. For example "-scheduleDate, +scheduleTime".
         * @default "+scheduleTime"
         * @pattern ^((\+|-)?(flightName|scheduleDate|scheduleTime|flightDirection|mainFlight|airlineCode|id|estimatedLandingTime|actualLandingTime|publicEstimatedOffBlockTime|actualOffBlockTime|expectedTimeBoarding|expectedTimeGateClosing|expectedTimeGateOpen|expectedTimeOnBelt|scheduleDateTime|lastUpdatedAt)(,|$))+$
         */
        sort?: string;
        /**
         * From date of search period. Format: yyyy-MM-dd'T'HH:mm:ss
         * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$
         */
        fromDateTime?: string;
        /**
         * To date of search period (inclusive). Format: yyyy-MM-dd'T'HH:mm:ss
         * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$
         */
        toDateTime?: string;
        /** Query by a specific DateTime field. Allowed fields are estimatedLandingTime, actualLandingTime, publicEstimatedOffBlockTime, actualOffBlockTime, expectedTimeBoarding, expectedTimeGateClosing, expectedTimeGateOpen, expectedTimeOnBelt, scheduleDateTime, lastUpdatedAt */
        searchDateTimeField?:
          | "estimatedLandingTime"
          | "actualLandingTime"
          | "publicEstimatedOffBlockTime"
          | "actualOffBlockTime"
          | "expectedTimeBoarding"
          | "expectedTimeGateClosing"
          | "expectedTimeGateOpen"
          | "expectedTimeOnBelt"
          | "scheduleDateTime"
          | "lastUpdatedAt";
        /**
         * Query by ScheduleDate range.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        fromScheduleDate?: string;
        /**
         * Query by ScheduleDate range
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        toScheduleDate?: string;
        /** Query based on operational/non-operational flights.true for operational and false for non-operational flights */
        isOperationalFlight?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<FlightList, void>({
        path: `/flights`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  airlines = {
    /**
     * @description Retrieves a list of airlines. If there are more hits then allowed on one page response headers will contain the URLs where other pages of the results can be reached.For example:<br/>Link: &lt;protocol://server_address:port/public-flights/resource&gt; ; rel="first", <br/>&lt;protocol://server_address:port/public-flights/resource?page=10&gt; rel="last", <br/>&lt;protocol://server_address:port/public-flights/resource?page=3&gt; rel="next", <br/>&lt;protocol://server_address:port/public-flights/resource?page=1&gt; rel="prev"<br/><br/>
     *
     * @name AirlinesList
     * @summary Retrieves list of airlines
     * @request GET:/airlines
     */
    airlinesList: (
      query?: {
        /**
         * page number
         * @format int32
         * @min 0
         * @max 499
         * @default 0
         */
        page?: number;
        /**
         * Specifies which field to use for sorting. Allowed fields are publicName, iata, icao and nvls. Use plus or minus sign to indicate ascending or descending order.
         * @default "+iata"
         * @pattern ^((\+|-)?(publicName|iata|icao|nvls)(,|$))+$
         */
        sort?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AirlineList, void>({
        path: `/airlines`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve airline based on IATA code or ICAO code.
     *
     * @name AirlinesDetail
     * @summary Retrieves airline based on code (IATA or ICAO)
     * @request GET:/airlines/{airline}
     */
    airlinesDetail: (airline: string, params: RequestParams = {}) =>
      this.request<Airline, void>({
        path: `/airlines/${airline}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  aircrafttypes = {
    /**
     * @description Retrieves list of aircrafttypes. If there are more hits then allowed on one page response headers will contain the URLs where other pages of the results can be reached.For example:<br/>Link: &lt;protocol://server_address:port/public-flights/resource&gt; ; rel="first", <br/>&lt;protocol://server_address:port/public-flights/resource?page=10&gt; rel="last", <br/>&lt;protocol://server_address:port/public-flights/resource?page=3&gt; rel="next", <br/>&lt;protocol://server_address:port/public-flights/resource?page=1&gt; rel="prev"<br/><br/>
     *
     * @name AircrafttypesList
     * @summary Retrieves list of aircrafttypes
     * @request GET:/aircrafttypes
     */
    aircrafttypesList: (
      query?: {
        /**
         * IATA main code
         * @minLength 3
         * @maxLength 3
         */
        iataMain?: string;
        /**
         * IATA sub code
         * @minLength 3
         * @maxLength 3
         */
        iataSub?: string;
        /**
         * Page number
         * @format int32
         * @min 0
         * @max 499
         * @default 0
         */
        page?: number;
        /**
         * Specifies which field to use for sorting. Allowed fields are iataMain, iataSub, longDescription and shortDescription. Use plus or minus sign to indicate ascending or descending order.
         * @default "+iataMain"
         * @pattern ^((\+|-)?(iataMain|iataSub|longDescription|shortDescription)(,|$))+$
         */
        sort?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AircraftTypeList, void>({
        path: `/aircrafttypes`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  destinations = {
    /**
     * @description Retrieves list of destinations<br/><br/>If there are more pages of the result, header will contain custom String field - Link, which will contain URLs where other pages of the results can be reached.<br/>For example:<br/>Link: &lt;protocol://server_address:port/public-flights/resource&gt; ; rel="first", <br/>&lt;protocol://server_address:port/public-flights/resource?page=10&gt; rel="last", <br/>&lt;protocol://server_address:port/public-flights/resource?page=3&gt; rel="next", <br/>&lt;protocol://server_address:port/public-flights/resource?page=1&gt; rel="prev"<br/><br/>
     *
     * @name DestinationsList
     * @summary Retrieves list of destinations
     * @request GET:/destinations
     */
    destinationsList: (
      query?: {
        /**
         * Page number
         * @format int32
         * @min 0
         * @max 499
         * @default 0
         */
        page?: number;
        /**
         * Specifies which field to use for sorting. Allowed fields are publicName.dutch, publicName.english, iata, country and city.. Use plus or minus sign to indicate ascending or descending order.
         * @default "+iata"
         * @pattern ^((\+|-)?(publicName\.dutch|publicName\.english|iata|country|city)(,|$))+$
         */
        sort?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DestinationList, void>({
        path: `/destinations`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves destination based on IATA code
     *
     * @name DestinationsDetail
     * @summary Retrieves destination based on IATA code
     * @request GET:/destinations/{iata}
     */
    destinationsDetail: (iata: string, params: RequestParams = {}) =>
      this.request<Destination, void>({
        path: `/destinations/${iata}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
