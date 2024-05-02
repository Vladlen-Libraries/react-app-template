import styled from './required-fields-helper.module.scss';
import cn from 'classnames';

type Props = {
  className?: string;
};

const UDFormRequiredFieldsHelper: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, styled.required)}>обязательные поля</div>
  );
};

export default UDFormRequiredFieldsHelper;
