import mime from 'mime';
import prettyBytes from 'pretty-bytes';

type CreateErrorMessageFunc = () => string;

export type FileValidationOptions = {
  accept: string | undefined;
  acceptMessage?: string | CreateErrorMessageFunc;
  maxSize: number | undefined;
  maxSizeMessage?: string | CreateErrorMessageFunc;
};

export type FileValidationResult = {
  errors: string[];
  acceptFiles: File[];
}

export function validateFiles(
  files: File[],
  options: FileValidationOptions
): FileValidationResult {
  const { accept, maxSize } = options;
  let result = [];
  let hasSizeError = false;
  let hasExtensionError = false;
  if (accept?.length || maxSize) {
    result = [];
    const availableMimeTypes = (accept || '')
      .replaceAll(/[\s,]/g, '')
      .split('.')
      .map((ext) => mime.getType(ext));

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      const isFileHasAvailableType = accept?.length
        ? availableMimeTypes.some((mimeType) => mimeType === file.type)
        : true;
      const isFileHasAvailableSize = maxSize ? file.size <= maxSize : true;

      if (isFileHasAvailableType && isFileHasAvailableSize) {
        result.push(file);
      } else {
        if (!isFileHasAvailableSize) {
          hasSizeError = true;
        }
        if (!isFileHasAvailableType) {
          hasExtensionError = true;
        }
      }
    }
  }

  let errors = [];
  if (hasSizeError && maxSize) {
    errors.push(createMaxSizeErrorMessage(options));
  }
  if (hasExtensionError) {
    errors.push(createFormatErrorMessage(options));
  }
  return { errors, acceptFiles: result };
}

function createMaxSizeErrorMessage(options: FileValidationOptions): string {
  const { maxSize, maxSizeMessage } = options;
  if (typeof maxSizeMessage === 'function') {
    return maxSizeMessage();
  } else if (typeof maxSizeMessage === 'string') {
    return maxSizeMessage;
  }

  return `Размер файла превышает ${prettyBytes(maxSize as number, { locale: true })}`;
}

function createFormatErrorMessage(options: FileValidationOptions) {
  const { acceptMessage } = options;
  if (typeof acceptMessage === 'function') {
    return acceptMessage();
  } else if (typeof acceptMessage === 'string') {
    return acceptMessage;
  }

  return 'Неверный формат файла';
}
