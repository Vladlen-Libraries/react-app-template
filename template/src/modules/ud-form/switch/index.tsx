import withFormControl from '../with-form-control';
import UDSwitch, { UDSwitchProps } from './switch';

const UDFormSwitchProvider = (props: any) => {
  const { field, fieldState, formState, hasError, ...other } = props;
  return <UDSwitch checked={field.value ?? false} {...field} {...other} />;
};

const UDFormSwitch = withFormControl<UDSwitchProps>(UDFormSwitchProvider);
export default UDFormSwitch;
