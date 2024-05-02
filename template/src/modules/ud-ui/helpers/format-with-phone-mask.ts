import { formatWithMask } from './format-with-mask';

export const formatWithPhoneMask = (
  value: string | undefined | null
): string => {
  return formatWithMask('+{0} 000 000-00-00', value);
};
