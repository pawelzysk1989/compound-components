import { ReactNode } from "react";

export type IsFunction<T, R = any> = T extends (...args: any[]) => R
  ? T
  : never;
export const isFunction = <T>(value: T): value is IsFunction<T> =>
  typeof value === "function";

export const isRenderFunction = <T>(
  value: T
): value is IsFunction<T, ReactNode> => isFunction(value);
