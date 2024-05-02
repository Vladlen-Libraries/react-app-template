import React from 'react';
import AsyncSelect from 'react-select/async';
import { customStyles } from '../select/styles';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export type UDAsyncSelectProps = {
  hasError?: boolean;
  options?: any;
  block?: boolean;
  isMulti?: boolean;
  hideSelectedOptions?: boolean;
  disabled?: boolean;
} & StateManagerProps;
// eslint-disable-next-line react/display-name
const UDAsyncSelect = React.forwardRef(
  (props: UDAsyncSelectProps, ref: any) => {
    const { hasError, block, disabled, options, ...other } = props;

    return (
      <div>
        <AsyncSelect
          options={options}
          styles={customStyles}
          placeholder="Выбрать"
          isDisabled={disabled}
          {...other}
        />
      </div>
    );
  }
);

UDAsyncSelect.defaultProps = {
  block: true
};

export default UDAsyncSelect;
