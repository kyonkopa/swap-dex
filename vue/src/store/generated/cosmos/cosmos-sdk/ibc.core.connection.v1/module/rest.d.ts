/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* ConnectionEnd defines a stateful object on a chain connected to another
separate one.
NOTE: there must only be 2 defined ConnectionEnds to establish
a connection between two chains.
*/
export interface V1ConnectionEnd {
    /** client associated with this connection. */
    clientId?: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection.
     */
    versions?: V1Version[];
    /** current state of the connection end. */
    state?: V1State;
    /** counterparty chain associated with this connection. */
    counterparty?: V1Counterparty;
    /**
     * delay period that must pass before a consensus state can be used for packet-verification
     * NOTE: delay period logic is only implemented by some clients.
     * @format uint64
     */
    delayPeriod?: string;
}
/**
 * Counterparty defines the counterparty chain associated with a connection end.
 */
export interface V1Counterparty {
    /**
     * identifies the client on the counterparty chain associated with a given
     * connection.
     */
    clientId?: string;
    /**
     * identifies the connection end on the counterparty chain associated with a
     * given connection.
     */
    connectionId?: string;
    /** commitment merkle prefix of the counterparty chain. */
    prefix?: V1MerklePrefix;
}
/**
* Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
the same. However some consensus algorithms may choose to reset the
height in certain conditions e.g. hard forks, state-machine breaking changes
In these cases, the RevisionNumber is incremented so that height continues to
be monitonically increasing even as the RevisionHeight gets reset
*/
export interface V1Height {
    /** @format uint64 */
    revisionNumber?: string;
    /** @format uint64 */
    revisionHeight?: string;
}
/**
* IdentifiedClientState defines a client state with an additional client
identifier field.
*/
export interface V1IdentifiedClientState {
    clientId?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := anypb.New(foo)
     *      if err != nil {
     *        ...
     *      }
     *      ...
     *      foo := &pb.Foo{}
     *      if err := any.UnmarshalTo(foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    clientState?: ProtobufAny;
}
/**
* IdentifiedConnection defines a connection with additional connection
identifier field.
*/
export interface V1IdentifiedConnection {
    /** connection identifier. */
    id?: string;
    /** client associated with this connection. */
    clientId?: string;
    versions?: V1Version[];
    /** current state of the connection end. */
    state?: V1State;
    /** counterparty chain associated with this connection. */
    counterparty?: V1Counterparty;
    /**
     * delay period associated with this connection.
     * @format uint64
     */
    delayPeriod?: string;
}
export interface V1MerklePrefix {
    /** @format byte */
    keyPrefix?: string;
}
/**
 * MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type.
 */
export declare type V1MsgConnectionOpenAckResponse = object;
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm response type.
 */
export declare type V1MsgConnectionOpenConfirmResponse = object;
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response type.
 */
export declare type V1MsgConnectionOpenInitResponse = object;
/**
 * MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type.
 */
export declare type V1MsgConnectionOpenTryResponse = object;
export interface V1QueryClientConnectionsResponse {
    /** slice of all the connection paths associated with a client. */
    connectionPaths?: string[];
    /** @format byte */
    proof?: string;
    /**
     * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
     * the same. However some consensus algorithms may choose to reset the
     * height in certain conditions e.g. hard forks, state-machine breaking changes
     * In these cases, the RevisionNumber is incremented so that height continues to
     * be monitonically increasing even as the RevisionHeight gets reset
     */
    proofHeight?: V1Height;
}
export interface V1QueryConnectionClientStateResponse {
    /**
     * IdentifiedClientState defines a client state with an additional client
     * identifier field.
     */
    identifiedClientState?: V1IdentifiedClientState;
    /** @format byte */
    proof?: string;
    /**
     * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
     * the same. However some consensus algorithms may choose to reset the
     * height in certain conditions e.g. hard forks, state-machine breaking changes
     * In these cases, the RevisionNumber is incremented so that height continues to
     * be monitonically increasing even as the RevisionHeight gets reset
     */
    proofHeight?: V1Height;
}
export interface V1QueryConnectionConsensusStateResponse {
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := anypb.New(foo)
     *      if err != nil {
     *        ...
     *      }
     *      ...
     *      foo := &pb.Foo{}
     *      if err := any.UnmarshalTo(foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensusState?: ProtobufAny;
    clientId?: string;
    /** @format byte */
    proof?: string;
    /**
     * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
     * the same. However some consensus algorithms may choose to reset the
     * height in certain conditions e.g. hard forks, state-machine breaking changes
     * In these cases, the RevisionNumber is incremented so that height continues to
     * be monitonically increasing even as the RevisionHeight gets reset
     */
    proofHeight?: V1Height;
}
/**
* QueryConnectionResponse is the response type for the Query/Connection RPC
method. Besides the connection end, it includes a proof and the height from
which the proof was retrieved.
*/
export interface V1QueryConnectionResponse {
    /**
     * ConnectionEnd defines a stateful object on a chain connected to another
     * separate one.
     * NOTE: there must only be 2 defined ConnectionEnds to establish
     * a connection between two chains.
     */
    connection?: V1ConnectionEnd;
    /** @format byte */
    proof?: string;
    /**
     * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
     * the same. However some consensus algorithms may choose to reset the
     * height in certain conditions e.g. hard forks, state-machine breaking changes
     * In these cases, the RevisionNumber is incremented so that height continues to
     * be monitonically increasing even as the RevisionHeight gets reset
     */
    proofHeight?: V1Height;
}
/**
* QueryConnectionsResponse is the response type for the Query/Connections RPC
method.
*/
export interface V1QueryConnectionsResponse {
    /** list of stored connections of the chain. */
    connections?: V1IdentifiedConnection[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
    /**
     * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
     * the same. However some consensus algorithms may choose to reset the
     * height in certain conditions e.g. hard forks, state-machine breaking changes
     * In these cases, the RevisionNumber is incremented so that height continues to
     * be monitonically increasing even as the RevisionHeight gets reset
     */
    height?: V1Height;
}
/**
* State defines if a connection is in one of the following states:
INIT, TRYOPEN, OPEN or UNINITIALIZED.

 - STATE_UNINITIALIZED_UNSPECIFIED: Default State
 - STATE_INIT: A connection end has just started the opening handshake.
 - STATE_TRYOPEN: A connection end has acknowledged the handshake step on the counterparty
chain.
 - STATE_OPEN: A connection end has completed the handshake.
*/
export declare enum V1State {
    STATE_UNINITIALIZED_UNSPECIFIED = "STATE_UNINITIALIZED_UNSPECIFIED",
    STATE_INIT = "STATE_INIT",
    STATE_TRYOPEN = "STATE_TRYOPEN",
    STATE_OPEN = "STATE_OPEN"
}
/**
* Version defines the versioning scheme used to negotiate the IBC verison in
the connection handshake.
*/
export interface V1Version {
    identifier?: string;
    features?: string[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
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
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title ibc/core/connection/v1/connection.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
   * No description
   *
   * @tags Query
   * @name QueryClientConnections
   * @summary ClientConnections queries the connection paths associated with a client
  state.
   * @request GET:/ibc/core/connection/v1beta1/client_connections/{clientId}
   */
    queryClientConnections: (clientId: string, params?: RequestParams) => Promise<HttpResponse<V1QueryClientConnectionsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryConnections
     * @summary Connections queries all the IBC connections of a chain.
     * @request GET:/ibc/core/connection/v1beta1/connections
     */
    queryConnections: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<V1QueryConnectionsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryConnection
     * @summary Connection queries an IBC connection end.
     * @request GET:/ibc/core/connection/v1beta1/connections/{connectionId}
     */
    queryConnection: (connectionId: string, params?: RequestParams) => Promise<HttpResponse<V1QueryConnectionResponse, RpcStatus>>;
    /**
   * No description
   *
   * @tags Query
   * @name QueryConnectionClientState
   * @summary ConnectionClientState queries the client state associated with the
  connection.
   * @request GET:/ibc/core/connection/v1beta1/connections/{connectionId}/client_state
   */
    queryConnectionClientState: (connectionId: string, params?: RequestParams) => Promise<HttpResponse<V1QueryConnectionClientStateResponse, RpcStatus>>;
    /**
   * No description
   *
   * @tags Query
   * @name QueryConnectionConsensusState
   * @summary ConnectionConsensusState queries the consensus state associated with the
  connection.
   * @request GET:/ibc/core/connection/v1beta1/connections/{connectionId}/consensus_state/revision/{revisionNumber}/height/{revisionHeight}
   */
    queryConnectionConsensusState: (connectionId: string, revisionNumber: string, revisionHeight: string, params?: RequestParams) => Promise<HttpResponse<V1QueryConnectionConsensusStateResponse, RpcStatus>>;
}
export {};
