import withFormControl from '../with-form-control';
import UDAsyncSelect, { UDAsyncSelectProps } from './select';

const UDFormAsyncSelectProvider = (props: any) => {
  const { field, fieldState, formState, hasError, ...other } = props;
  return <UDAsyncSelect hasError={hasError} {...field} {...other} />;
};

const UDFormAsyncSelect = withFormControl<UDAsyncSelectProps>(
  UDFormAsyncSelectProvider
);
export default UDFormAsyncSelect;
