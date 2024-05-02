import { AxiosResource } from '@snap-alex/domain-js';
import { toast } from 'react-toastify';

const excludeGlobalErrors = [400, 409];

const httpResource = new AxiosResource(
  process.env.REACT_APP_API_URL as string,
  {
    headers: {
      'Content-Type': 'application/json'
    },
    trailingSlash: true,
    timeOffset: false,
    // @ts-ignore
    handleError: ({ response }) => {
      const { error, message, statusCode } = response?.response?.data || {};
      if (error || message || statusCode) {
        const isNeedExclude = excludeGlobalErrors.some(c => Number(c) === Number(statusCode));
        if (!isNeedExclude) {
          toast.error(`${error} ${statusCode}: ${message}`);
        }
      }
    }
  }
);

export default httpResource;
