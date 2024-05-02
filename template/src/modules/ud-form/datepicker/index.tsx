import withFormControl from '../with-form-control';
import UDDatepicker, { UDDatepickerProps } from './datepicker';

const UDFormDatepickerProvider = (props: any) => {
  const { field, fieldState, formState, hasError, ...other } = props;

  return <UDDatepicker hasError={hasError} {...field} {...other} />;
};

const UDFormDatepicker = withFormControl<UDDatepickerProps>(
  UDFormDatepickerProvider
);
export default UDFormDatepicker;
