import cn from 'classnames';
import styles from './ud-button.module.scss';
import UDText from '../text';
import React, { useMemo } from 'react';
import UDSpinner from '../spinner';
import UDIcon from '../icon';
import { UDButtonProps } from './UDButtonProps';
import { Link, NavLink, NavLinkProps } from 'react-router-dom';

const UDButton = (props: Partial<UDButtonProps> & Partial<NavLinkProps>) => {
  const {
    isLoading,
    asLink,
    udTheme,
    size,
    small,
    icon,
    iconAfter,
    onlyIconOnMobile,
    disabled,
    children,
    className,
    type,
    el,
    iconSize,
    ...other
  } = props;
  const classNames = cn(className, {
    [styles.brandOutline]: udTheme === 'brand-outline',
    [styles.brand]: udTheme === 'brand',
    [styles.default]: udTheme === 'default',
    [styles.danger]: udTheme === 'danger',
    [styles.dangerOutline]: udTheme === 'danger-outline',
    [styles.success]: udTheme === 'success',
    [styles.defaultSize]: !small,
    [styles.withIcon]: styles.withIcon,
    [icon ? styles.withIconSmall : styles.smallSize]: small,
    [styles.onlyIcon]: onlyIconOnMobile,
    [styles.linkBtn]: asLink
  });

  const textClassNames = cn({
    'ms-2': icon,
    'me-2': iconAfter,
    [styles.btnText]: onlyIconOnMobile && icon
  });

  const El = useMemo<any>(() => {
    switch (el) {
      case 'nav-link':
        return NavLink;
      case 'link':
        return Link;
      case 'span':
        return 'span';
      case 'button':
      default:
        return 'button';
    }
  }, [el]);

  const btnType = el === 'button' ? type : undefined;

  let targetIconSize = 20;
  if (!iconSize) {
    targetIconSize = size === 'sm' ? 16 : 20;
  }

  return (
    <El type={btnType} disabled={disabled} className={classNames} {...other}>
      {icon && <UDIcon icon={icon} size={targetIconSize} />}
      {children && (
        <UDText
          align="center"
          udEl="span"
          udSize={size}
          className={textClassNames}
        >
          {children}
        </UDText>
      )}
      {iconAfter && <UDIcon icon={iconAfter} size={targetIconSize} />}
      {isLoading && (
        <span className={styles.spinnerWrap}>
          <UDSpinner size="sm" />
        </span>
      )}
    </El>
  );
};

UDButton.defaultProps = {
  type: 'submit',
  udTheme: 'default',
  size: 'md',
  el: 'button'
};

export default UDButton;
