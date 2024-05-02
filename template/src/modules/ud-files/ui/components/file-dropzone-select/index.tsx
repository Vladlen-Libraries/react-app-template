import React, { useState } from 'react';
import UDFileDropzone from '../file-dropzone';
import UDFileSelect from '../file-select';
import { UDIconType } from '../../../../ud-ui/icon';
import UDButton from '../../../../ud-ui/button';
import UDText from '../../../../ud-ui/text';
import UDFormError from '../../../../ud-form/error-message';
import UDFileExtIcon from '../file-icon';

type Props = {
  btnIcon?: UDIconType;
  btnText?: string;
  helpText?: string;
  limitationsText?: string;
  maxSize?: number;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onSelect?: (files: File[]) => void;
};
const UDFileDropzoneSelect = (props: Props) => {
  const { btnIcon, btnText, helpText, limitationsText, ...uploaderProps } =
    props;

  const [uploadErrors, setUploadErrors] = useState<string[] | null>(null);

  const onErrorsChange = (errors: string[]) => setUploadErrors(errors);

  const hasErrors = uploadErrors != null && uploadErrors?.length > 0;

  return (
    <>
      <UDFileDropzone
        hasError={hasErrors}
        onErrorsChange={onErrorsChange}
        {...uploaderProps}
      >
        <UDFileExtIcon ext="any" />
        <div className="mt-6">
          <UDFileSelect onErrorsChange={onErrorsChange} {...uploaderProps}>
            <UDButton
              type="button"
              icon={btnIcon}
              udTheme="brand-outline"
              el="span"
            >
              {btnText}
            </UDButton>
          </UDFileSelect>
        </div>
        {helpText && (
          <UDText udType="gray" udSize="sm" className="mt-8">
            {helpText}
          </UDText>
        )}
        {limitationsText && (
          <UDText udType="gray" udSize="sm" className="mt-2">
            {limitationsText}
          </UDText>
        )}
      </UDFileDropzone>
      {uploadErrors?.length && (
        <div className="mt-6 text-center">
          {uploadErrors.map((msg) => {
            return <UDFormError key={msg} message={msg} />;
          })}
        </div>
      )}
    </>
  );
};

UDFileDropzoneSelect.defaultProps = {
  multiple: false,
  btnIcon: 'line-file-arrow-up',
  btnText: 'Загрузить документ',
  helpText: 'Перетащите файл\nс компьютера или загрузите его'
};

export default UDFileDropzoneSelect;
