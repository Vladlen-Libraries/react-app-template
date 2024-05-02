import { formatWithMask } from './format-with-mask';

export const formatWithNumberMask = (
  value: string | undefined | null
): string => {
  return formatWithMask(
    {
      mask: Number,
      thousandsSeparator: ' ',
      padFractionalZeros: true
    },
    value
  );
};
