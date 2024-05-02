import withFormControl from '../with-form-control';
import UDTextarea, { UDTextareaProps } from './textarea';

const UDFormTextareaProvider = (props: any) => {
  const { field, fieldState, formState, hasError, ...other } = props;
  return <UDTextarea hasError={hasError} {...field} {...other} />;
};

const UDFormTextarea = withFormControl<UDTextareaProps>(UDFormTextareaProvider);
export default UDFormTextarea;
