import React, { useMemo } from 'react';
import { UDFileExtIconMap } from '../../../domain/maps/UDFileExtIconMap';

type Props = {
  ext: any;
};
const UDFileExtIcon = (props: Props) => {
  const { ext } = props;

  const Icon = useMemo(() => {
    return UDFileExtIconMap[ext];
  }, [ext]);

  return <Icon />;
};

export default UDFileExtIcon;
