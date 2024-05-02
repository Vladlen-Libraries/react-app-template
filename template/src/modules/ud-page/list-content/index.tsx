import React from 'react';
import styled from './ud-page-list-content.module.scss';
import UDSpinner from '../../ud-ui/spinner';

type Props = {
  children: any;
  isLoading?: boolean;
  error?: any;
};
const UDPageListContent = (props: Props) => {
  const { children, isLoading } = props;
  return (
    <div className={styled.container}>
      {children}
      {isLoading && <UDSpinner alignByParent />}
    </div>
  );
};

export default UDPageListContent;
