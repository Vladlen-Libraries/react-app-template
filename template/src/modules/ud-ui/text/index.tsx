import React from 'react';
import cn from 'classnames';
import styles from './ud-text.module.scss';
import { UDTextSize } from './types';

type Props = {
  udSize?: UDTextSize;
  udWeight?: 'sm' | 'md' | 'lg' | 'xl';
  udType?: 'danger' | 'gray';
  udEl: 'div' | 'p' | 'span';
  align?: 'left' | 'center' | 'right';
} & React.HTMLAttributes<HTMLDivElement>;
const UDText = (props: Props) => {
  const {
    udSize,
    udWeight,
    udType,
    udEl,
    children,
    className,
    align,
    ...other
  } = props;
  const classNames = cn(className, {
    [styles.sizeSm]: udSize === 'sm',
    [styles.sizeMd]: udSize === 'md',
    [styles.weightSm]: udWeight === 'sm',
    [styles.weightMd]: udWeight === 'md',
    [styles.weightLg]: udWeight === 'lg',
    [styles.weightXl]: udWeight === 'xl',
    [styles.error]: udType === 'danger',
    [styles.gray]: udType === 'gray',
    [styles.alignLeft]: align === 'left',
    [styles.alignRight]: align === 'right',
    [styles.alignCenter]: align === 'center'
  });

  return React.createElement(
    udEl,
    { ...other, className: classNames },
    children
  );
};

UDText.defaultProps = {
  udSize: 'md',
  udWeight: 'sm',
  udEl: 'div'
};

export default UDText;
