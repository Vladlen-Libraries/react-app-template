import React, { useState } from 'react';
import styles from './ud-file-dropzone.module.scss';
import cn from 'classnames';
import { validateFiles } from '../../../helpers/validate-files';

type Props = {
  children: any;
  hasError?: boolean;
  maxSize?: number;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onSelect?: (files: File[]) => void;
  onErrorsChange?: (errors: string[]) => void;
};

const UDFileDropzone = (props: Props) => {
  const {
    children,
    accept,
    multiple,
    disabled,
    onErrorsChange,
    hasError,
    maxSize,
    onSelect
  } = props;
  const [isAreaHighlighted, setAreaHighlight] = useState(false);

  const preventAndStopEvent = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragEnter = (e: any) => {
    preventAndStopEvent(e);
    setAreaHighlight(true);
  };

  const onDragOver = (e: any) => {
    preventAndStopEvent(e);
    setAreaHighlight(true);
  };

  const onDragLeave = (e: any) => {
    preventAndStopEvent(e);
    setAreaHighlight(false);
  };

  const onDrop = (e: any) => {
    preventAndStopEvent(e);

    setAreaHighlight(false);
    const dt = e.dataTransfer;
    const filesList = dt.files as FileList;
    const filesAr = Array.from(filesList);

    let { errors, acceptFiles: result } = validateFiles(filesAr, {
      accept,
      maxSize
    });

    onErrorsChange && onErrorsChange(errors);

    if (result.length > 0) {
      if (multiple === false && result.length > 1) {
        result = [result[0]];
      }
      onSelect && onSelect(result);
    }
  };

  const areaClassNames = cn(styles.uploadArea, {
    [styles.uploadAreaHighlighted]: isAreaHighlighted,
    [styles.danger]: hasError,
    [styles.disabled]: disabled
  });

  return (
    <div
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={areaClassNames}
    >
      {children}
    </div>
  );
};

UDFileDropzone.defaultProps = {
  multiple: false
};

export default UDFileDropzone;
