import React from 'react';
import { observer as observerNative } from 'mobx-react-lite';

export const observer = <
  T extends
    | React.FunctionComponent<unknown>
    | React.ForwardRefRenderFunction<unknown>,
>(
  target: T,
  name: string
): T & {
  displayName?: string;
} => {
  if (!target.displayName) {
    target.displayName = name;
  }

  const observed = observerNative(target);

  observed.displayName = name;

  return observed;
};
