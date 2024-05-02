import withFormControl from '../with-form-control';
import UDInput, { UDInputProps } from './input';

const UDFormInputProvider = (props: any) => {
  const { field, fieldState, formState, hasError, ...other } = props;
  return <UDInput hasError={hasError} {...field} {...other} />;
};

const UDFormInput = withFormControl<UDInputProps>(UDFormInputProvider);
export default UDFormInput;
