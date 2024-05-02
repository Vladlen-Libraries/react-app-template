import UDFormLabel from '../label';
import React, { useCallback, useMemo } from 'react';
import { generateId } from './generate-id';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import UDFormError from '../error-message';
import cn from 'classnames';

type ShowErrorsAfter = 'submit' | 'blur' | 'onchange' | undefined | null;

const isAllowShowErrors = (
  showErrorsAfter: ShowErrorsAfter,
  isSubmitted: boolean,
  isTouched: boolean,
  isDirty: boolean
): boolean => {
  let allow = false;
  if (showErrorsAfter) {
    if (
      (showErrorsAfter === 'submit' && isSubmitted) ||
      (showErrorsAfter === 'blur' && isTouched) ||
      (showErrorsAfter === 'onchange' && isDirty)
    ) {
      allow = true;
    }
  } else {
    allow = true;
  }
  return allow;
};

const FormControlRenderer = (Component: any, props: any) => {
  const {
    name,
    field,
    fieldState,
    formState,
    inpId,
    disabled,
    showErrorsAfter,
    ...other
  } = props;
  const { error, isTouched, isDirty } = fieldState;
  const { isSubmitted, isSubmitting } = useFormState();

  const allowShowErrors = isAllowShowErrors(
    showErrorsAfter,
    isSubmitted,
    isTouched,
    isDirty
  );

  const hasError = allowShowErrors && !!error;

  return (
    <>
      <Component
        field={field}
        fieldState={fieldState}
        formState={formState}
        id={inpId}
        disabled={disabled || isSubmitting}
        hasError={hasError}
        {...other}
      />
      {hasError && (
        <ErrorMessage
          errors={formState.errors}
          name={name}
          render={({ message }) => <UDFormError message={message} />}
        />
      )}
    </>
  );
};

type FormControlProps = {
  inputId?: string;
  name?: string;
  isHookForm?: boolean;
  labelTitle?: string | React.ReactElement;
  required?: boolean;
  switchLabel?: boolean;
  showErrorsAfter?: ShowErrorsAfter;
  disabled?: boolean;
  noSpacing?: boolean;
};

const withFormControl = <Props extends unknown>(
  WrappedControl: (props: any) => JSX.Element
) => {
  const FormControl = React.forwardRef(
    (props: FormControlProps & Props, ref) => {
      const {
        inputId,
        name,
        isHookForm,
        labelTitle,
        required,
        switchLabel,
        disabled,
        showErrorsAfter,
        noSpacing,
        // @ts-ignore
        ...other
      } = props;
      const inpId = useMemo(() => generateId(name, inputId), [inputId, name]);
      //@ts-ignore

      // region Hook form
      const { control } = useFormContext();
      const renderHookFormControl = useCallback(
        ({ field, fieldState, formState }) => {
          return FormControlRenderer(WrappedControl, {
            name,
            field,
            fieldState,
            formState,
            inpId,
            disabled,
            showErrorsAfter,
            ...other
          });
        },
        [name, WrappedControl, ref, inpId, disabled, showErrorsAfter]
      );
      // endregion
      if (name && isHookForm) {
        const containerClassNames = cn({
          'mb-4': !noSpacing,
          'd-flex align-items-center': switchLabel
        });

        return (
          <div className={containerClassNames}>
            {labelTitle && !switchLabel && (
              <UDFormLabel htmlFor={inpId} required={required}>
                {labelTitle}
              </UDFormLabel>
            )}
            <Controller
              name={name}
              control={control}
              render={renderHookFormControl}
            />
            {labelTitle && switchLabel && (
              <UDFormLabel
                htmlFor={inpId}
                required={required}
                className="mb-0 ms-4"
              >
                {labelTitle}
              </UDFormLabel>
            )}
          </div>
        );
      }
      return null;
    }
  );

  // @ts-ignore
  FormControl.defaultProps = {
    isHookForm: true,
    showErrorsAfter: 'blur',
    noSpacing: false
  };

  return FormControl;
};

export default withFormControl;
