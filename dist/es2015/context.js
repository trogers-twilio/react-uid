import * as React from 'react';
import { generateUID } from './uid';
export var createSource = function (prefix) {
  if (prefix === void 0) {
    prefix = '';
  }
  return {
    value: 1,
    prefix: prefix,
    uid: generateUID(),
  };
};
export var counter = createSource();
export var source = React.createContext(createSource());
export var getId = function (source) {
  return source.value++;
};
export var getPrefix = function (source) {
  return source ? source.prefix : '';
};
