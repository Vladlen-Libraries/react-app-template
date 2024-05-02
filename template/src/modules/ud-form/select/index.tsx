import withFormControl from '../with-form-control';
import UDSelect, { UDSelectProps } from './select';

const UDFormSelectProvider = (props: any) => {
  const { field, fieldState, formState, hasError, ...other } = props;
  return <UDSelect hasError={hasError} {...field} {...other} />;
};

const UDFormSelect = withFormControl<UDSelectProps>(UDFormSelectProvider);
export default UDFormSelect;
