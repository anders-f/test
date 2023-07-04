/*
File needed for the PostNord Web components to be recogizable in the project
*/

import { DetailedHTMLProps, HTMLAttributes } from "react";

/* eslint-disable */
import { JSX as LocalJSX } from "@postnord/web-components/loader";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type StencilProps<T> = { [P in keyof T]: Omit<T[P], "ref"> };

type ReactProps<T> = {
  [P in keyof T]: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};

type StencilToReact<
  T = LocalJSX.IntrinsicElements,
  U = HTMLElementTagNameMap
> = StencilProps<T> & ReactProps<U>;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact {}
  }
}
