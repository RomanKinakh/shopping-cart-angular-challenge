export const isNullOrUndefined = (value: any): boolean => {
  return value === null || typeof value === 'undefined';
};

export const deepMerge = (source, obj) => {
  const newObj = {};
  for (const key of Object.keys(source)) {
    if (obj instanceof Object && key in obj) {
      if (source[key] instanceof Object) {
        newObj[key] = deepMerge(source[key], obj[key]);
      } else {
        newObj[key] = isNullOrUndefined(obj[key]) ? source[key] : obj[key];
      }
    } else {
      newObj[key] = source[key];
    }
  }
  return newObj;
};

export const fromStringToBoolean = (value): boolean => {
  return value === 'true';
};
