import { all } from 'redux-saga/effects';

import items from './items/sagas';

export default function* rootSaga() {
  return yield all([items]);
}
