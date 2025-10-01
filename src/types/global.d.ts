/* eslint-disable @typescript-eslint/naming-convention */
declare const MSW_ACTIVE: string;

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

type ExtendedFC = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

declare type IFC<D = Record<string, unknown>> = React.FC<ExtendedFC & D>;
