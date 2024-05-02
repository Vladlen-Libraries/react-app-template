import React from 'react';
import styles from './ud-spinner.module.scss';
import SpinnerGif from './spinner.gif';
import cn from 'classnames';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  classNames?: string;
  fullScreen?: boolean;
  alignByParent?: boolean;
};
const UDSpinner = (props: Props) => {
  const { size, classNames, alignByParent, fullScreen } = props;
  const spinnerClassNames = cn(classNames, {
    [styles.imageSM]: size === 'sm',
    [styles.imageMD]: size === 'md',
    [styles.imageLG]: size === 'lg'
  });
  const wrapClassNames = cn(styles.imageWrap, {
    [styles.absCenter]: alignByParent
  });
  if (fullScreen) {
    return (
      <div className={styles.fullScreen}>
        <span className={wrapClassNames}>
          <img src={SpinnerGif} className={spinnerClassNames} />
        </span>
      </div>
    );
  }
  return (
    <span className={wrapClassNames}>
      <img src={SpinnerGif} className={spinnerClassNames} />
    </span>
  );
};

UDSpinner.defaultProps = {
  size: 'md',
  fullScreen: false
};

export default UDSpinner;
