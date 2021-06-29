import { ReactElement } from 'react';
import { Props } from './types';

export default function If({ condition, children }: Props): ReactElement | null {
  return (condition ? children : null);
}