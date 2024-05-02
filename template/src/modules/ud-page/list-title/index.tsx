import React from 'react';
import styled from './ud-page-bar.module.scss';
import cn from 'classnames';
import UDTitle from 'modules/ud-ui/title';

type Props = {
  children: any;
  className?: string;
};
const UDPageListTitle = (props: Props) => {
  const { children, className } = props;
  const classNames = cn(styled.container, className);
  return (
    <div className={classNames}>
      <UDTitle udLevel="1">{children}</UDTitle>
    </div>
  );
};

export default UDPageListTitle;
