export const groupBy = (keys: string[]) => (array: any[]) =>
  array.reduce((objectsByKeyValue: any, obj: any) => {
    const value = keys.map((key: any) => obj[key]).join('-');
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
