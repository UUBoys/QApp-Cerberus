import * as e from 'express';

export interface IReq<T = void> extends e.Request {
    body: T;
}

export interface IRes extends e.Response { }

export interface IJwtPayload {
  uuid: string;
}