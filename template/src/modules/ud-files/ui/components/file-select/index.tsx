import React from 'react';
import styles from './ud-file-select.module.scss';
import { validateFiles } from '../../../helpers/validate-files';

type Props = {
  children: any;
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
  disabled?: boolean;
  onSelect?: (files: File[]) => void;
  onErrorsChange?: (errors: string[]) => void;
};
const UDFileSelect = (props: Props) => {
  const {
    children,
    accept,
    multiple,
    disabled,
    onSelect,
    onErrorsChange,
    maxSize
  } = props;

  const onInputChange = (e: any) => {
    const inputElement = e.currentTarget;
    let files = inputElement.files;
    files =
      files instanceof FileList || Array.isArray(files)
        ? Array.from(files)
        : [files];

    let { errors, acceptFiles: result } = validateFiles(files, {
      accept,
      maxSize
    });

    onErrorsChange && onErrorsChange(errors);

    onSelect && onSelect(result);
    inputElement.value = '';
  };

  return (
    <label className={styles.label}>
      <input
        onChange={onInputChange}
        disabled={disabled}
        type="file"
        accept={accept}
        multiple={multiple}
        className={styles.input}
      />
      {children}
    </label>
  );
};

UDFileSelect.defaultProps = {
  multiple: false
};

export default UDFileSelect;
