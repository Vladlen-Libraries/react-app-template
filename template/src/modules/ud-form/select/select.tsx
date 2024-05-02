// @ts-ignore

import React, { useMemo } from 'react';
import Select from 'react-select';
import { customStyles } from './styles';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

const _getOptionValue = (option: any, settings: any): any => {
  const { outValue, inOutValue, valueKey, selectValue } = settings;
  let result = option;
  if (outValue || inOutValue) {
    result = option?.value;
    if (valueKey) {
      result = option[valueKey];
    } else if (selectValue) {
      result = selectValue(option);
    }
  }
  return result;
};

export type UDSelectProps = {
  hasError?: boolean;
  options?: any;
  block?: boolean;
  disabled?: boolean;
  hideSelectedOptions?: boolean;

  inValue?: boolean;
  outValue?: boolean;
  inOutValue?: boolean;

  labelKey?: string;
  valueKey?: any;
} & StateManagerProps;

// eslint-disable-next-line react/display-name
const UDSelect = React.forwardRef((props: UDSelectProps, ref: any) => {
  const {
    block,
    disabled,
    options,
    onChange,
    value,
    inOutValue,
    inValue,
    outValue,
    valueKey,
    getOptionValue,
    getOptionLabel,
    ...other
  } = props;

  const getOptionSettings = useMemo(() => {
    return {
      outValue,
      inOutValue,
      valueKey,
      getOptionValue
    };
  }, [getOptionValue, inOutValue, outValue, valueKey]);

  const onSelectChange = (selected: any) => {
    let result;
    if (Array.isArray(selected)) {
      result = selected?.map((op) => _getOptionValue(op, getOptionSettings));
    } else {
      result = _getOptionValue(selected, getOptionSettings);
    }
    (onChange as any)(result);
  };

  const targetValue = useMemo(() => {
    let result = value;
    if (inValue || inOutValue) {
      if (Array.isArray(value)) {
        result = options.filter(
          (o: any) => _getOptionValue(o, getOptionSettings) === value
        );
      } else {
        result = options.find(
          (o: any) => _getOptionValue(o, getOptionSettings) === value
        );
      }
    }
    return result;
  }, [inOutValue, inValue, options, outValue, value, valueKey]);

  return (
    <div>
      <Select
        styles={customStyles}
        options={options}
        placeholder="Выбрать"
        isDisabled={disabled}
        value={targetValue}
        onChange={onSelectChange}
        {...other}
      />
    </div>
  );
});

UDSelect.defaultProps = {
  block: true
};

export default UDSelect;
