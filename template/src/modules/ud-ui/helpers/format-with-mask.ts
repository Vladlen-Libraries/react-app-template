import IMask, { AnyMaskedOptions } from 'imask';

export const formatWithMask = (
  mask: string | AnyMaskedOptions,
  value: string | undefined | null
): string => {
  if (!!value && typeof value === 'string') {
    const Mask = IMask.createMask(typeof mask === 'string' ? { mask } : mask);
    return Mask.resolve(value);
  }
  return value || '';
};
