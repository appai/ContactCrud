import { call, put } from 'redux-saga/effects'
import ContactActions from '../Redux/ContactRedux'

export function * getContact (api, action) {
  const { data } = action
  const response = yield call(api.getContact, data)

  if (response.ok) {
    yield put(ContactActions.contactSuccess(response.data))
  } else {
    yield put(ContactActions.contactFailure())
  }
}

export function * postContact (api, action) {
  const { data } = action
  const response = yield call(api.postContact, data)

  if (response.ok) {
    yield put(ContactActions.postContactSuccess(response.data))
  } else {
    yield put(ContactActions.postContactFailure(response.data))
  }
}

export function * getContactDetail (api, action) {
  const { data } = action
  const response = yield call(api.getContactDetail, data)

  if (response.ok) {
    yield put(ContactActions.contactDetailSuccess(response.data))
  } else {
    yield put(ContactActions.contactDetailFailure())
  }
}

export function * putContactDetail (api, action) {
  const { data } = action
  const response = yield call(api.putContactDetail, data)

  if (response.ok) {
    yield put(ContactActions.putContactDetailSuccess(response.data))
  } else {
    yield put(ContactActions.putContactDetailFailure(response.data))
  }
}

export function * deleteContactDetail (api, action) {
  const { data } = action
  const response = yield call(api.deleteContactDetail, data)

  if (response.ok) {
    yield put(ContactActions.deleteContactDetailSuccess(response.data))
  } else {
    yield put(ContactActions.deleteContactDetailFailure())
  }
}
