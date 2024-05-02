import React from 'react';
import styled from './ud-form-textarea.module.scss';
import cn from 'classnames';

export type UDTextareaProps = {
  hasError?: boolean;
  block?: boolean;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const UDTextarea = React.forwardRef<HTMLTextAreaElement, UDTextareaProps>(
  (props, ref) => {
    const { hasError, block = true, ...other } = props;

    const textareaClassNames = cn(styled.textarea, {
      [styled.textareaBlock]: block,
      [styled.textareaInvalid]: hasError
    });

    return <textarea ref={ref} className={textareaClassNames} {...other} />;
  }
);

export default UDTextarea;
