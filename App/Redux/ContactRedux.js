import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  contactRequest: ['data'],
  contactSuccess: ['payload'],
  contactFailure: null,
  postContactRequest: ['data'],
  postContactSuccess: ['payload'],
  postContactFailure: ['data'],
  contactDetailRequest: ['data'],
  contactDetailSuccess: ['payload'],
  contactDetailFailure: null,
  putContactDetailRequest: ['data'],
  putContactDetailSuccess: ['payload'],
  putContactDetailFailure: ['data'],
  deleteContactDetailRequest: ['data'],
  deleteContactDetailSuccess: ['payload'],
  deleteContactDetailFailure: null,
})

export const ContactTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  postData: null,
  postFetching: null,
  postPayload: null,
  postError: null,
  detailData: null,
  detailFetching: null,
  detailPayload: null,
  detailError: null,
  putDetailData: null,
  putDetailFetching: null,
  putDetailPayload: null,
  putDetailError: null,
  deleteDetailData: null,
  deleteDetailFetching: null,
  deleteDetailPayload: null,
  deleteDetailError: null
})

/* ------------- Selectors ------------- */

export const ContactSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// GET CONTACT
export const request = (state, { data }) => state.merge({ fetching: true, data, payload: null })
export const success = (state, action) => state.merge({ fetching: false, error: null, payload: action.payload })
export const failure = state => state.merge({ fetching: false, error: true, payload: null })

// POST CONTACT
export const postRequest = (state, { data }) => state.merge({ postFetching: true, postData: data, postPayload: null })
export const postSuccess = (state, action) => state.merge({ postFetching: false, postError: null, postPayload: action.payload })
export const postFailure = (state, { data }) => state.merge({ postFetching: false, postError: data, postPayload: null })

// GET DETAIL CONTACT
export const contactDetailRequest = (state, { data }) => state.merge({ detailFetching: true, detailData: data, detailPayload: null })
export const contactDetailSuccess = (state, action) => state.merge({ detailFetching: false, detailError: null, detailPayload: action.payload })
export const contactDetailFailure = state => state.merge({ detailFetching: false, detailError: true, detailPayload: null })

// PUT DETAIL CONTACT
export const putContactDetailRequest = (state, { data }) => state.merge({ putDetailFetching: true, putDetailData: data, putDetailPayload: null })
export const putContactDetailSuccess = (state, action) => state.merge({ putDetailFetching: false, putDetailError: null, putDetailPayload: action.payload })
export const putContactDetailFailure = (state, { data }) => state.merge({ putDetailFetching: false, putDetailError: data, putDetailPayload: null })

// DELETE DETAIL CONTACT
export const deleteContactDetailRequest = (state, { data }) => state.merge({ deleteDetailFetching: true, deleteDetailData: data, deleteDetailPayload: null })
export const deleteContactDetailSuccess = (state, action) => state.merge({ deleteDetailFetching: false, deleteDetailError: null, deleteDetailPayload: action.payload })
export const deleteContactDetailFailure = state => state.merge({ deleteDetailFetching: false, deleteDetailError: true, deleteDetailPayload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CONTACT_REQUEST]: request,
  [Types.CONTACT_SUCCESS]: success,
  [Types.CONTACT_FAILURE]: failure,
  [Types.POST_CONTACT_REQUEST]: postRequest,
  [Types.POST_CONTACT_SUCCESS]: postSuccess,
  [Types.POST_CONTACT_FAILURE]: postFailure,
  [Types.CONTACT_DETAIL_REQUEST]: contactDetailRequest,
  [Types.CONTACT_DETAIL_SUCCESS]: contactDetailSuccess,
  [Types.CONTACT_DETAIL_FAILURE]: contactDetailFailure,
  [Types.PUT_CONTACT_DETAIL_REQUEST]: putContactDetailRequest,
  [Types.PUT_CONTACT_DETAIL_SUCCESS]: putContactDetailSuccess,
  [Types.PUT_CONTACT_DETAIL_FAILURE]: putContactDetailFailure,
  [Types.DELETE_CONTACT_DETAIL_REQUEST]: deleteContactDetailRequest,
  [Types.DELETE_CONTACT_DETAIL_SUCCESS]: deleteContactDetailSuccess,
  [Types.DELETE_CONTACT_DETAIL_FAILURE]: deleteContactDetailFailure,
})
