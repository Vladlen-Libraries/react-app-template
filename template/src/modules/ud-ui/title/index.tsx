import React from 'react';
import cn from 'classnames';
import styles from './ud-title.module.scss';

type Props = {
  udLevel?: '1' | '2' | '3' | '4' | '5' | '6';
} & React.HTMLAttributes<HTMLElement>;
const UDTitle = (props: Props) => {
  const { udLevel, children, className, ...other } = props;
  const elType = `h${udLevel}`;
  const classNames = cn(className, [styles[elType]]);
  return React.createElement(elType, {
    children,
    className: classNames,
    ...other
  });
};

UDTitle.defaultProps = {
  udLevel: '1'
};

export default UDTitle;
