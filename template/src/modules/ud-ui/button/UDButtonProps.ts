import { UDTextSize } from '../text/types';
import { UDIconType } from '../icon';
import React from 'react';
import { UDButtonTheme } from './UDButtonTheme';

export type UDButtonProps = {
  udTheme?: UDButtonTheme;
  isLoading?: boolean;
  asLink?: boolean;
  size?: UDTextSize;
  small?: boolean;
  disabled?: boolean;
  icon?: UDIconType | undefined;
  iconAfter?: UDIconType | undefined;
  iconSize?: number;
  onlyIconOnMobile?: boolean;
  el: 'button' | 'nav-link' | 'link' | 'span';
} & React.HTMLAttributes<HTMLButtonElement>;
