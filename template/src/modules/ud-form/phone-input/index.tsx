import UDInput, { UDInputProps } from '../input/input';
import withFormControl from '../with-form-control';

const UDFormInputProvider = (props: any) => {
  const { field, fieldState, formState, hasError, ...other } = props;
  const { onChange, ...fieldProps } = field;
  const onInputChange = (e: any) => {
    e.target.value = `+${e.target.value}`;
    onChange(e);
  };
  return (
    <UDInput
      hasError={hasError}
      mask="+{0} (000) 000-00-00"
      onChange={onInputChange}
      {...fieldProps}
      {...other}
    />
  );
};

const UDFormPhoneInput = withFormControl<UDInputProps>(UDFormInputProvider);
export default UDFormPhoneInput;
