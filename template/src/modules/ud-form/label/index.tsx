import React from 'react';
import cn from 'classnames';
import styles from './ud-form-label.module.scss';
import UDText from '../../ud-ui/text';

type ReactNode =
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | string
  | boolean
  | null
  | undefined;

type Props = {
  htmlFor?: string;
  hasError?: boolean;
  className?: string;
  required?: boolean;
  children?: ReactNode;
};
const UDFormLabel = (props: Props) => {
  const { htmlFor, required, children, className, hasError, ...other } = props;
  const classNames = cn(styles.label, className, {
    [styles.invalid]: hasError,
    [styles.required]: required
  });
  const textType = hasError ? 'danger' : undefined;
  return (
    <label {...other} htmlFor={htmlFor} className={classNames}>
      <UDText udEl="span" udType={textType} udSize="md" udWeight="md">
        {children}
      </UDText>
    </label>
  );
};

export default UDFormLabel;
