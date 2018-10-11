import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'

// CONTACT
import { ContactTypes } from '../Redux/ContactRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'

// CONTACT
import { getContact, getContactDetail, postContact, putContactDetail, deleteContactDetail } from './ContactSagas'

/* ------------- API ------------- */

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    // CONTACT
    takeLatest(ContactTypes.CONTACT_REQUEST, getContact, api),
    takeLatest(ContactTypes.POST_CONTACT_REQUEST, postContact, api),
    takeLatest(ContactTypes.CONTACT_DETAIL_REQUEST, getContactDetail, api),
    takeLatest(ContactTypes.PUT_CONTACT_DETAIL_REQUEST, putContactDetail, api),
    takeLatest(ContactTypes.DELETE_CONTACT_DETAIL_REQUEST, deleteContactDetail, api)
  ])
}
