export const unwrapServerError = (error: any): string => {
  const message = error?.data?.response?.data?.message || error?.data?.message;
  if (Array.isArray(message)) {
    return message[0];
  }
  return message;
};
