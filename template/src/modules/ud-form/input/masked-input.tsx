import React, { useCallback, useMemo, useState } from 'react';
import IMask from 'imask';

const UDMaskedInput = React.forwardRef((props: any, ref) => {
  const { mask, onChange, unmask, value, ...other } = props;
  const Mask = useMemo(() => {
    return IMask.createMask(typeof mask === 'string' ? { mask } : mask);
  }, [mask]);

  const [inputValue, setInputValue] = useState(Mask.resolve(value || ''));

  const onInputChange = useCallback(
    (e) => {
      Mask.resolve(e.target.value);
      setInputValue(Mask.value);
      e.target.value = unmask ? Mask.unmaskedValue : Mask.value;
      onChange && onChange(e);
    },
    [Mask, unmask, onChange]
  );

  return (
    <input ref={ref} value={inputValue} onChange={onInputChange} {...other} />
  );
});

export default UDMaskedInput;
