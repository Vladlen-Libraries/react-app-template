import React from 'react';
import cn from 'classnames';
import styled from './ud-form-input.module.scss';
import UDMaskedInput from './masked-input';
import UDIcon, { UDIconType } from '../../ud-ui/icon';
import { AnyMaskedOptions } from 'imask';

export type UDInputProps = {
  hasError?: boolean;
  mask?: string | AnyMaskedOptions;
  unmask?: boolean;
  iconAfter?: UDIconType;
  iconBefore?: UDIconType;
  iconComponentAfter?: React.ReactElement;
  iconComponentBefore?: React.ReactElement;
  rounded?: boolean;
  block?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const UDInput = React.forwardRef((props: UDInputProps, ref: any) => {
  const {
    mask,
    unmask,
    hasError,
    iconAfter,
    iconBefore,
    iconComponentAfter,
    iconComponentBefore,
    block,
    rounded,
    ...other
  } = props;

  const inputClassNames = cn(styled.input, {
    [styled.invalid]: hasError,
    [styled.inputWithIconAfter]: !!iconAfter,
    [styled.inputWithIconBefore]: !!iconBefore,
    [styled.rounded]: !!rounded,
    [styled.inputBlock]: !!block
  });

  const containerClassNames = cn(styled.container, {
    [styled.containerWithIcon]:
      !!iconAfter ||
      !!iconBefore ||
      !!iconComponentAfter ||
      !!iconComponentBefore
  });

  const Input = mask ? (
    <UDMaskedInput
      ref={ref}
      mask={mask}
      unmask={unmask}
      className={inputClassNames}
      {...other}
    />
  ) : (
    <input ref={ref} className={inputClassNames} {...other} />
  );

  const renderIconAfter = () => {
    return iconComponentAfter ?? <UDIcon icon={iconAfter} />;
  };

  const renderIconBefore = () => {
    return iconComponentBefore ?? <UDIcon icon={iconBefore} />;
  };

  return (
    <div className={containerClassNames}>
      {(iconBefore || iconComponentBefore) && (
        <div className={cn(styled.icon, styled.iconBefore)}>
          {renderIconBefore()}
        </div>
      )}
      {Input}
      {(iconAfter || iconComponentAfter) && (
        <div className={cn(styled.icon, styled.iconAfter)}>
          {renderIconAfter()}
        </div>
      )}
    </div>
  );
});

UDInput.defaultProps = {
  type: 'text',
  unmask: true,
  block: true
};

export default UDInput;
