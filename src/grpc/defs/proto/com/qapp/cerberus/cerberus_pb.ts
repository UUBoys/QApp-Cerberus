// @generated by protoc-gen-es v1.4.0 with parameter "target=ts"
// @generated from file proto/com/qapp/cerberus/cerberus.proto (package com.qapp.cerberus, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message com.qapp.cerberus.RegisterRequest
 */
export class RegisterRequest extends Message<RegisterRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string username = 2;
   */
  username = "";

  /**
   * @generated from field: string password = 3;
   */
  password = "";

  constructor(data?: PartialMessage<RegisterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.cerberus.RegisterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterRequest {
    return new RegisterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterRequest {
    return new RegisterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterRequest {
    return new RegisterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterRequest | PlainMessage<RegisterRequest> | undefined, b: RegisterRequest | PlainMessage<RegisterRequest> | undefined): boolean {
    return proto3.util.equals(RegisterRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.cerberus.RegisterResponse
 */
export class RegisterResponse extends Message<RegisterResponse> {
  /**
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<RegisterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.cerberus.RegisterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterResponse {
    return new RegisterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterResponse {
    return new RegisterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterResponse {
    return new RegisterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterResponse | PlainMessage<RegisterResponse> | undefined, b: RegisterResponse | PlainMessage<RegisterResponse> | undefined): boolean {
    return proto3.util.equals(RegisterResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.cerberus.LoginRequest
 */
export class LoginRequest extends Message<LoginRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<LoginRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.cerberus.LoginRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginRequest {
    return new LoginRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJsonString(jsonString, options);
  }

  static equals(a: LoginRequest | PlainMessage<LoginRequest> | undefined, b: LoginRequest | PlainMessage<LoginRequest> | undefined): boolean {
    return proto3.util.equals(LoginRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.cerberus.LoginResponse
 */
export class LoginResponse extends Message<LoginResponse> {
  /**
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<LoginResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.cerberus.LoginResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginResponse {
    return new LoginResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LoginResponse | PlainMessage<LoginResponse> | undefined, b: LoginResponse | PlainMessage<LoginResponse> | undefined): boolean {
    return proto3.util.equals(LoginResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.cerberus.GoogleLoginRequest
 */
export class GoogleLoginRequest extends Message<GoogleLoginRequest> {
  /**
   * @generated from field: string idToken = 1;
   */
  idToken = "";

  constructor(data?: PartialMessage<GoogleLoginRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.cerberus.GoogleLoginRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "idToken", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoogleLoginRequest {
    return new GoogleLoginRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoogleLoginRequest {
    return new GoogleLoginRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoogleLoginRequest {
    return new GoogleLoginRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GoogleLoginRequest | PlainMessage<GoogleLoginRequest> | undefined, b: GoogleLoginRequest | PlainMessage<GoogleLoginRequest> | undefined): boolean {
    return proto3.util.equals(GoogleLoginRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.cerberus.GetUserDataRequest
 */
export class GetUserDataRequest extends Message<GetUserDataRequest> {
  /**
   * @generated from field: int32 userId = 1;
   */
  userId = 0;

  constructor(data?: PartialMessage<GetUserDataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.cerberus.GetUserDataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "userId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserDataRequest {
    return new GetUserDataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserDataRequest {
    return new GetUserDataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserDataRequest {
    return new GetUserDataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetUserDataRequest | PlainMessage<GetUserDataRequest> | undefined, b: GetUserDataRequest | PlainMessage<GetUserDataRequest> | undefined): boolean {
    return proto3.util.equals(GetUserDataRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.cerberus.GetUserDataResponse
 */
export class GetUserDataResponse extends Message<GetUserDataResponse> {
  /**
   * @generated from field: string username = 1;
   */
  username = "";

  /**
   * @generated from field: string email = 2;
   */
  email = "";

  /**
   * @generated from field: string userImage = 3;
   */
  userImage = "";

  /**
   * @generated from field: string firstName = 4;
   */
  firstName = "";

  /**
   * @generated from field: string lastName = 5;
   */
  lastName = "";

  /**
   * @generated from field: string role = 6;
   */
  role = "";

  constructor(data?: PartialMessage<GetUserDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.cerberus.GetUserDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "userImage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "firstName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "lastName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserDataResponse {
    return new GetUserDataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserDataResponse {
    return new GetUserDataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserDataResponse {
    return new GetUserDataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetUserDataResponse | PlainMessage<GetUserDataResponse> | undefined, b: GetUserDataResponse | PlainMessage<GetUserDataResponse> | undefined): boolean {
    return proto3.util.equals(GetUserDataResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.cerberus.UpdateUserDataRequest
 */
export class UpdateUserDataRequest extends Message<UpdateUserDataRequest> {
  /**
   * @generated from field: int32 userId = 1;
   */
  userId = 0;

  /**
   * @generated from field: optional string username = 2;
   */
  username?: string;

  /**
   * @generated from field: optional string email = 3;
   */
  email?: string;

  /**
   * @generated from field: optional string password = 4;
   */
  password?: string;

  /**
   * @generated from field: optional string userImage = 5;
   */
  userImage?: string;

  /**
   * @generated from field: optional string firstName = 6;
   */
  firstName?: string;

  /**
   * @generated from field: optional string lastName = 7;
   */
  lastName?: string;

  /**
   * @generated from field: optional string role = 8;
   */
  role?: string;

  constructor(data?: PartialMessage<UpdateUserDataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.cerberus.UpdateUserDataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "userId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "userImage", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "firstName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "lastName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserDataRequest {
    return new UpdateUserDataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserDataRequest {
    return new UpdateUserDataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserDataRequest {
    return new UpdateUserDataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUserDataRequest | PlainMessage<UpdateUserDataRequest> | undefined, b: UpdateUserDataRequest | PlainMessage<UpdateUserDataRequest> | undefined): boolean {
    return proto3.util.equals(UpdateUserDataRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.cerberus.UpdateUserDataResponse
 */
export class UpdateUserDataResponse extends Message<UpdateUserDataResponse> {
  /**
   * @generated from field: string username = 1;
   */
  username = "";

  /**
   * @generated from field: string email = 2;
   */
  email = "";

  /**
   * @generated from field: string userImage = 3;
   */
  userImage = "";

  /**
   * @generated from field: string firstName = 4;
   */
  firstName = "";

  /**
   * @generated from field: string lastName = 5;
   */
  lastName = "";

  /**
   * @generated from field: string role = 6;
   */
  role = "";

  constructor(data?: PartialMessage<UpdateUserDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.cerberus.UpdateUserDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "userImage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "firstName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "lastName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserDataResponse {
    return new UpdateUserDataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserDataResponse {
    return new UpdateUserDataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserDataResponse {
    return new UpdateUserDataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUserDataResponse | PlainMessage<UpdateUserDataResponse> | undefined, b: UpdateUserDataResponse | PlainMessage<UpdateUserDataResponse> | undefined): boolean {
    return proto3.util.equals(UpdateUserDataResponse, a, b);
  }
}

