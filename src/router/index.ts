import React from "react";
import { Login } from "../pages/Login";
import { Event } from "../pages/Event";

export interface IRoute {
  path: string;
  element: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: false, element: Event },
];

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login, exact: true },
];
