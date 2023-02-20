import * as R from 'ramda';

export const isNilOrEmpty = (value: any): boolean => R.or(R.isNil(value), R.isEmpty(value));

export const isNotNilAndNotEmpty = (value: any): boolean => R.and(R.not(R.isNil(value)), R.not(R.isEmpty(value)));
