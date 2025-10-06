/* eslint-disable @typescript-eslint/naming-convention */

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg?svgr' {
  import type { SVGProps } from 'react';
  const content: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}

type ExtendedFC = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

declare type IFC<D = Record<string, unknown>> = React.FC<ExtendedFC & D>;

declare type TSizeType = 'small' | 'medium' | 'large';

declare const MSW_ACTIVE: string;
