import React from 'react';
import styled from './ud-form-switch.module.scss';

export type UDSwitchProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const UDSwitch = React.forwardRef<HTMLInputElement, UDSwitchProps>(
  (props, ref) => {
    return (
      <label className={styled.toggle}>
        <input ref={ref} type="checkbox" {...props} />
        <span className={styled.switch}></span>
      </label>
    );
  }
);

export default UDSwitch;
